export function calculateRisk(age) {
  if (age > 50) {
    return 0.5;
  } else if (age > 30) {
    return 0.3;
  } else {
    return 0.1;
  }
}
