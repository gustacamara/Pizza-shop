import { useMutation, useQuery } from "@tanstack/react-query";
import { Button } from "./ui/button";
import { DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { getManagedRestaurant } from "./api/get-manage-restaurant";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { updateProfile } from "./api/update-profile";
import { toast } from "sonner";

export function StoreProfileDialog() {

  const storeProfileSchema = z.object({
    name: z.string().min(1),
    description: z.string(),
  })

  type StoreProfileSchema = z.infer<typeof storeProfileSchema>

  const { data: managedRestaurant } = useQuery({
    queryKey: ['managed-restaurant'],
    queryFn: getManagedRestaurant,
    staleTime: Infinity

  })

  const {
    register,
    handleSubmit,
    formState: { isSubmitting }
  } = useForm<StoreProfileSchema>({
    resolver: zodResolver(storeProfileSchema),
    values: {
      name: managedRestaurant?.name ?? '',
      description: managedRestaurant?.description ?? '',
    }
  })

  const { mutateAsync: updateProfileFn } = useMutation({
    mutationFn: updateProfile,
  })

  async function handleUpdateProfile(data: StoreProfileSchema) {
    try {
      await updateProfileFn({
        name: data.name,
        description: data.description,
      })
      toast.success("Perfil atualizado com sucesso!")
    } catch {
      toast.error("Erro ao atualizar, tente novamente.")
    }
  }

  console.log(managedRestaurant)

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Perfil da loja</DialogTitle>
        <DialogDescription>
          Atualize as informações do seu estabelecimento visiveis ao seu cliente
        </DialogDescription>
      </DialogHeader>
      <form action="" onSubmit={handleSubmit(handleUpdateProfile)}>
        <div className="space-y-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="name">
              Nome
            </Label>
            <Input className="col-span-3" id="name" {...register('name')} />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="description">
              Descrição
            </Label>
            <Textarea className="col-span-3" id="description" {...register('description')} />
          </div>

        </div>
        <DialogFooter>
          <DialogClose>
            <Button variant={"ghost"}>Cancelar</Button>
          </DialogClose>
          <Button type="submit" variant="success">Salvar</Button>
        </DialogFooter>
      </form>

    </DialogContent>
  )
}