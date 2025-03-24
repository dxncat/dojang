import { News } from "@/interfaces"
import { New } from "./New";

interface Props {
    news: {
        id: string;
        title: string;
        content: string;
        updatedAt: Date;
        author: {
            id: string;
            name: string;
        };
    }[];
}

export const NewsComponent = ({ news }: Props) => {
    return (
        <div>
            {news.map((item) => (
                <New key={item.id} news={item} />
            ))}
        </div>
    )
}
