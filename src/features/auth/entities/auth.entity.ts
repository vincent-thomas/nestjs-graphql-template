import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class Auth {
  @Field(() => String, {
    description: 'Example field (placeholder)',
  })
  exampleField: string;
}
