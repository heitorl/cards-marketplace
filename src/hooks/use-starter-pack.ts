import { useQueryClient } from "@tanstack/react-query"
import { giveStarterPack } from "../services/starter-pack-service"

export const useStarterPack = () => {
  const queryClient = useQueryClient()

  const executeStarterPack = async () => {
    const received = await giveStarterPack()

    if (received) {
      await queryClient.invalidateQueries({
        queryKey: ["my-cards"],
        refetchType: "active",
      })
    }

    return received
  }

  return { executeStarterPack }
}
