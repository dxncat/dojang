import Link from "next/link";

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
    };
}

export const New = ({ news }: Props) => {
    return (
        <Link href={`/news/${news.id}`}>
            <div className="p-4 my-4 border-2 rounded-lg hover:shadow-lg hover:bg-gray-800 transition-all">
                <div className="flex justify-between">
                    <h2 className="text-2xl">{news.title} - {news.author.name}</h2>
                    <p>{news.updatedAt.toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                </div>
                <p>{news.content}</p>
            </div>
        </Link>
    )
}
