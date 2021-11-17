import {AccessResource, applyDecorators} from "@tsclean/core";
import {JwtAdapter} from "@/infrastructure/driven-adapters";

export function Auth(roles: string[]) {
    return applyDecorators(AccessResource(new JwtAdapter(roles)));
}