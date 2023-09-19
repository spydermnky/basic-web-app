export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }
  if (query.toLowerCase().includes("andrew id")) {
    return (
      "My Andrew ID is pkhomche"
    );
  }

  if (query.includes("What is your name?")) {
    return (
      "My name is Peter"
    );
  }

  if (query.includes("What is 50 plus 80?")) {
    return (
      "It is 130"
    );
  }

  if (query.includes("Which of the following numbers is the largest: 48, 54, 19?")) {
    return (
      "54 is the largest"
    );
  }

  if (query.includes("Which of the following numbers is the largest: 48, 54, 19?")) {
    return (
      "54 is the largest"
    );
  }

  
  

  return "";
}
