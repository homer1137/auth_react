import "./Home.css";

type Props = {
  name: string;
  pending: boolean
};

export function Home({ name, pending }: Props) {
  return (
    <>
      <div className="container2">
        <h1>This is Home page</h1>
        {name ? (
          <h3>hello {name}</h3>
        ) : (
          <h3>Sorry, you are not authenticated</h3>
        )}
    
      </div>
    </>
  );
}
