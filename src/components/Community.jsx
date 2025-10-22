import Button from "./functionalComponents/Button";

const Community = () => {
  return (
    <section className="py-20 text-center bg-neutral-100 dark:bg-neutral-950">
      <div className="mx-3">
        <h2 className="text-3xl font-bold mb-4">
          Join the Pencil Boy Community
        </h2>
        <p className="mb-6 text-neutral-600">
          Get notified when drops happen. Join the waitlist now.
        </p>
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 border rounded w-64"
          />
          <br />
          <Button name={"Join community"} />
        </form>
      </div>
    </section>
  );
};

export default Community;
