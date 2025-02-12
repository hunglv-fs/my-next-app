import Link from "next/link";
import styles from "../styles/Post.module.css";
export default async function ItemsPage() {
    const API_URL = process.env.API_URL;
    const res = await fetch(`${API_URL}/api/posts`, { cache: "no-store" });

    const items = await res.json();
    return (
        <div className={styles.postPage}>
        <h1>Danh sách Items</h1>
        <ul>
            {items.map((item: any) => (
            <li key={item.id}>
                <Link href={`/posts/${item.id}`}>{item.title}</Link>
            </li>
            ))}
        </ul>
        </div>
    );
}
