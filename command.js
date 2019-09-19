class command {
  execute(x) {
    if (col == 0) stroke(256, 20);
    else stroke(51*(col % 5), 51*(floor(col / 5) % 5), 51*(floor(col / (5 * 5)) % 5),255);
    if (x == 'F' || x == 'A' || x == 'G' || x == 'Q') {
      line(0, 0, 0, -len);
      translate(0, -len)
    } else if (x == '+') rotate(angle);
    else if (x == '-') rotate(-angle);
    else if (x == '[') push();
    else if (x == ']') pop();
    else if (x == '/') len /= divFactor;
    else if (x == '*') len *= divFactor;
    else if (x == '>') col = (col + 1) % (5 * 5 * 5);
    else if (x == '<') col = (col - 1) % (5 * 5 * 5);
  }
}