/**
 * Challenge:
 * - Create a Meme component.
 * - Inside the Meme component, render a styled form
 *   with our 2 inputs and the button.
 * - Don't worry about adding any functionality yet
 */

export default function Meme() {
  return (
    <form action="" className="form">
      <div className="form--row">
        <input type="text" placeholder="Shut up" />
        <input type="text" placeholder="and take my money" />
      </div>
      <input type="submit" value="Get a new meme image 🖼" />
    </form>
  );
}
