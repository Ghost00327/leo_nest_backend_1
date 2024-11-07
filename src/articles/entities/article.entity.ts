import { Article } from "@prisma/client";
import { ApiProperty } from "@nestjs/swagger";

export class ArticleEntity implements Article{
    @ApiProperty()
    id: number;

    @ApiProperty()
    title: string;

    @ApiProperty()
    description: string | null;

    @ApiProperty()
    body: string;

    @ApiProperty()
    published: boolean;

    @ApiProperty()
    authorId: number;

    @ApiProperty()
    authors: object;

    @ApiProperty()
    createAt: Date;

    @ApiProperty()
    updateAt: Date;


}
