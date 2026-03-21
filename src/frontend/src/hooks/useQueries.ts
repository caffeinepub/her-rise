import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { Report } from "../backend.d";
import { useActor } from "./useActor";

export function useGetAllReports() {
  const { actor, isFetching } = useActor();
  return useQuery<Report[]>({
    queryKey: ["reports"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllReports();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useSubmitReport() {
  const { actor } = useActor();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({
      reportType,
      description,
      location,
    }: {
      reportType: string;
      description: string;
      location: string | null;
    }) => {
      if (!actor) throw new Error("Not connected");
      return actor.submitReport(reportType, description, location);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["reports"] });
    },
  });
}
