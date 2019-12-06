import curDot from "cursor-dot";

const cursor = curDot({
  easing: 4,
  background: "#fff",
  borderColor: "transparent"
});

cursor.over(".text",{
  scale:1.5
})