export const daysLeft = (deadline) => {
  let seconds;

  if (deadline instanceof Date) {
    seconds = Math.floor(deadline.getTime() / 1000);
  } else if (
    typeof deadline === "object" &&
    deadline !== null &&
    typeof deadline.toString === "function"
  ) {
    seconds = Number(deadline.toString());
  } else if (typeof deadline === "bigint") {
    seconds = Number(deadline);
  } else {
    seconds = Number(deadline);
  }

  if (seconds > 1e12) {
    seconds = Math.floor(seconds / 1000);
  }

  const nowSec = Math.floor(Date.now() / 1000);
  const diffSec = seconds - nowSec;

  const days = Math.ceil(diffSec / 86400);
  return String(Math.max(0, days));
};

export const calculateBarPercentage = (goal, raisedAmount) => {
  const percentage = Math.round((raisedAmount * 100) / goal);

  return percentage;
};

export const checkIfImage = (url) => {
  return new Promise((resolve) => {
    const img = new Image();
    img.src = url;

    if (img.complete) return resolve(true);

    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
  });
  const img = new Image();
  img.src = url;

  if (img.complete) callback(true);

  img.onload = () => callback(true);
  img.onerror = () => callback(false);
};
