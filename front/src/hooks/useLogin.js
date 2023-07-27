import { useQuery } from "react-query";
import { auth } from "../services";

export const useLogin = () => {
    const { data, isLoading } = useQuery({
        queryKey: ["user"],
        queryFn: auth.getUser
    });

    return {data, isLoading};
}