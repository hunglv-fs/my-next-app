import styles from "../../styles/Post.module.css";

export default async function ItemDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
  
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await res.json();
  
    return (
      <div className={styles.postDetailPage}>
        <h1>{data.title}</h1>
        <p>{data.body}</p>
      </div>
    );
  }
  