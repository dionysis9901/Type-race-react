class GenerateText {
  constructor() {
    this.text =
      "This will be replaced with TEXT when you press the Begin button";
    this.texts = [
      `In my younger and more vulnerable years my father gave me some advice that I've been turning over in my mind ever since. "Whenever you feel like criticizing anyone," he told me, "just remember that all the people in this world haven't had the advantages that you've had." He didn't say any more but we've always been unusually communicative in a reserved way and I understood that he meant a great deal more than that.`,
      `Take my hand for a minute. We're in it. Imagine all the pain that might be forgiven. What if I had your heart? What if you wore my scars? How would we break down? What if you were me? What if I were you? What if you told my lies? What if I cried with your eyes? Could anyone keep us down? What if you were me? What if I were you?`,
      `This is our hope. This is the faith with which I return to the South. With this faith we will be able to hew out of the mountain of despair a stone of hope. With this faith we will be able to transform the jangling discords of our nation into a beautiful symphony of brotherhood. With this faith we will be able to work together, to pray together, to struggle together, to go to jail together, to stand up for freedom together, knowing that we will be free one day.`,
      `A "multitool" is not really a tool at all - not in the usual sense of the word - but a disposable electronic device that utilizes electromagnetic resonance detection and frequency modulation to dynamically alter the flow of current through almost any non-hardened circuitry. Skilled agents can use the multitool to manipulate code locks, cameras, autogun turrets, alarms, or other security elements`
    ];

    this.randomize();
  }

  randomize() {
    this.text = this.texts[Math.floor(Math.random() * this.texts.length)];
    return this.text;
  }
}

const Text = new GenerateText();

export { Text };
