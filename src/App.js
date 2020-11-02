import React from "react";
import View from "./neatly/View";
import CardView from "./neatly/CardView";
import "./styles.css";

export default function App() {
  return (
    <>
      <h1>{"<View />"}</h1>

      <div style={{ border: "thin solid #eee" }}>
        <h2>Default</h2>
        <View padding="sm">
          <CardView padding="lg" margin="sm">
            Item 1
          </CardView>
          <CardView padding="lg" margin="sm">
            Item 2
          </CardView>
          <CardView padding="lg" margin="sm">
            Item 3
          </CardView>
        </View>
      </div>

      <div style={{ border: "thin solid #eee" }}>
        <h2>Justify Left</h2>
        <View padding="sm" justify="left">
          <CardView padding="lg" margin="sm">
            Item 1
          </CardView>
          <CardView padding="lg" margin="sm">
            Item 2
          </CardView>
          <CardView padding="lg" margin="sm">
            Item 3
          </CardView>
        </View>
      </div>

      <div style={{ border: "thin solid #eee" }}>
        <h2>Justify Center</h2>
        <View padding="sm" justify="center">
          <CardView padding="lg" margin="sm">
            Item 1
          </CardView>
          <CardView padding="lg" margin="sm">
            Item 2
          </CardView>
          <CardView padding="lg" margin="sm">
            Item 3
          </CardView>
        </View>
      </div>

      <div style={{ border: "thin solid #eee" }}>
        <h2>Justify Right</h2>
        <View padding="sm" justify="right">
          <CardView padding="lg" margin="sm">
            Item 1
          </CardView>
          <CardView padding="lg" margin="sm">
            Item 2
          </CardView>
          <CardView padding="lg" margin="sm">
            Item 3
          </CardView>
        </View>
      </div>

      <div style={{ border: "thin solid #eee" }}>
        <h2>Reversed Justify Left</h2>
        <View padding="sm" justify="left" reverse>
          <CardView padding="lg" margin="sm">
            Item 1
          </CardView>
          <CardView padding="lg" margin="sm">
            Item 2
          </CardView>
          <CardView padding="lg" margin="sm">
            Item 3
          </CardView>
        </View>
      </div>

      <div style={{ border: "thin solid #eee" }}>
        <h2>Reversed Justify center</h2>
        <View padding="sm" justify="center" reverse>
          <CardView padding="lg" margin="sm">
            Item 1
          </CardView>
          <CardView padding="lg" margin="sm">
            Item 2
          </CardView>
          <CardView padding="lg" margin="sm">
            Item 3
          </CardView>
        </View>
      </div>

      <div style={{ border: "thin solid #eee" }}>
        <h2>Reversed Justify Right</h2>
        <View padding="sm" justify="right" reverse>
          <CardView padding="lg" margin="sm">
            Item 1
          </CardView>
          <CardView padding="lg" margin="sm">
            Item 2
          </CardView>
          <CardView padding="lg" margin="sm">
            Item 3
          </CardView>
        </View>
      </div>

      <div style={{ height: "400px", border: "thin solid #eee" }}>
        <h2>Align Top</h2>
        <View padding="sm" align="top">
          <CardView padding="lg" margin="sm">
            Item 1
          </CardView>
          <CardView padding="lg" margin="sm">
            Item 2
          </CardView>
          <CardView padding="lg" margin="sm">
            Item 3
          </CardView>
        </View>
      </div>

      <div style={{ height: "400px", border: "thin solid #eee" }}>
        <h2>Align Middle</h2>
        <View padding="sm" align="middle">
          <CardView padding="lg" margin="sm">
            Item 1
          </CardView>
          <CardView padding="lg" margin="sm">
            Item 2
          </CardView>
          <CardView padding="lg" margin="sm">
            Item 3
          </CardView>
        </View>
      </div>

      <div style={{ height: "400px", border: "thin solid #eee" }}>
        <h2>Align Bottom</h2>
        <View padding="sm" align="bottom">
          <CardView padding="lg" margin="sm">
            Item 1
          </CardView>
          <CardView padding="lg" margin="sm">
            Item 2
          </CardView>
          <CardView padding="lg" margin="sm">
            Item 3
          </CardView>
        </View>
      </div>

      <div style={{ height: "400px", border: "thin solid #eee" }}>
        <h2>Sapce Around</h2>
        <View padding="sm" space="around">
          <CardView padding="lg" margin="sm">
            Item 1
          </CardView>
          <CardView padding="lg" margin="sm">
            Item 2
          </CardView>
          <CardView padding="lg" margin="sm">
            Item 3
          </CardView>
        </View>
      </div>

      <div style={{ height: "400px", border: "thin solid #eee" }}>
        <h2>Sapce Between</h2>
        <View padding="sm" space="between">
          <CardView padding="lg" margin="sm">
            Item 1
          </CardView>
          <CardView padding="lg" margin="sm">
            Item 2
          </CardView>
          <CardView padding="lg" margin="sm">
            Item 3
          </CardView>
        </View>
      </div>

      <div style={{ height: "400px", border: "thin solid #eee" }}>
        <h2>Sapce Evenly</h2>
        <View padding="sm" space="evenly">
          <CardView padding="lg" margin="sm">
            Item 1
          </CardView>
          <CardView padding="lg" margin="sm">
            Item 2
          </CardView>
          <CardView padding="lg" margin="sm">
            Item 3
          </CardView>
        </View>
      </div>

      <div style={{ border: "thin solid #eee" }}>
        <h2>Stretched</h2>
        <View padding="sm" stretch>
          <CardView padding="lg" margin="sm">
            Item 1
          </CardView>
          <CardView padding="lg" margin="sm">
            Item 2
          </CardView>
          <CardView padding="lg" margin="sm">
            Item 3
          </CardView>
        </View>
      </div>

      <div style={{ height: "400px", border: "thin solid #eee" }}>
        <h2>Tall</h2>
        <View tall>
          <CardView padding="lg" margin="sm">
            Item 1
          </CardView>
          <CardView padding="lg" margin="sm">
            Item 2
          </CardView>
          <CardView padding="lg" margin="sm">
            Item 3
          </CardView>
        </View>
      </div>

      <div style={{ border: "thin solid #eee" }}>
        <h2>Wrap</h2>
        <View padding="sm" style={{ width: 200 }} wrap>
          <CardView padding="lg" margin="sm">
            Item 1
          </CardView>
          <CardView padding="lg" margin="sm">
            Item 2
          </CardView>
          <CardView padding="lg" margin="sm">
            Item 3
          </CardView>
          <CardView padding="lg" margin="sm">
            Item 4
          </CardView>
          <CardView padding="lg" margin="sm">
            Item 5
          </CardView>
          <CardView padding="lg" margin="sm">
            Item 6
          </CardView>
          <CardView padding="lg" margin="sm">
            Item 7
          </CardView>
          <CardView padding="lg" margin="sm">
            Item 8
          </CardView>
        </View>
      </div>

      <div style={{ border: "thin solid #eee" }}>
        <h2>Reversed Wrap</h2>
        <View padding="sm" style={{ width: 200 }} wrap="reverse">
          <CardView padding="lg" margin="sm">
            Item 1
          </CardView>
          <CardView padding="lg" margin="sm">
            Item 2
          </CardView>
          <CardView padding="lg" margin="sm">
            Item 3
          </CardView>
          <CardView padding="lg" margin="sm">
            Item 4
          </CardView>
          <CardView padding="lg" margin="sm">
            Item 5
          </CardView>
          <CardView padding="lg" margin="sm">
            Item 6
          </CardView>
          <CardView padding="lg" margin="sm">
            Item 7
          </CardView>
          <CardView padding="lg" margin="sm">
            Item 8
          </CardView>
        </View>
      </div>

      <div style={{ border: "thin solid #eee" }}>
        <h2>Scroll</h2>
        <View padding="sm" style={{ width: 200 }} scroll>
          <CardView padding="lg" margin="sm">
            Item 1
          </CardView>
          <CardView padding="lg" margin="sm">
            Item 2
          </CardView>
          <CardView padding="lg" margin="sm">
            Item 3
          </CardView>
          <CardView padding="lg" margin="sm">
            Item 4
          </CardView>
          <CardView padding="lg" margin="sm">
            Item 5
          </CardView>
          <CardView padding="lg" margin="sm">
            Item 6
          </CardView>
          <CardView padding="lg" margin="sm">
            Item 7
          </CardView>
          <CardView padding="lg" margin="sm">
            Item 8
          </CardView>
        </View>
      </div>

      <h1>{"<View.Stack />"}</h1>

      <div style={{ border: "thin solid #eee" }}>
        <h2>Default</h2>

        <View.Stack padding="sm">
          <CardView padding="lg" margin="sm">
            Item 1
          </CardView>
          <CardView padding="lg" margin="sm">
            Item 2
          </CardView>
          <CardView padding="lg" margin="sm">
            Item 3
          </CardView>
        </View.Stack>
      </div>

      <div style={{ border: "thin solid #eee" }}>
        <h2>Justify Left</h2>
        <View.Stack padding="sm" justify="left">
          <CardView padding="lg" margin="sm">
            Item 1
          </CardView>
          <CardView padding="lg" margin="sm">
            Item 2
          </CardView>
          <CardView padding="lg" margin="sm">
            Item 3
          </CardView>
        </View.Stack>
      </div>

      <div style={{ border: "thin solid #eee" }}>
        <h2>Justify Center</h2>
        <View.Stack padding="sm" justify="center">
          <CardView padding="lg" margin="sm">
            Item 1
          </CardView>
          <CardView padding="lg" margin="sm">
            Item 2
          </CardView>
          <CardView padding="lg" margin="sm">
            Item 3
          </CardView>
        </View.Stack>
      </div>

      <div style={{ border: "thin solid #eee" }}>
        <h2>Justify Right</h2>
        <View.Stack padding="sm" justify="right">
          <CardView padding="lg" margin="sm">
            Item 1
          </CardView>
          <CardView padding="lg" margin="sm">
            Item 2
          </CardView>
          <CardView padding="lg" margin="sm">
            Item 3
          </CardView>
        </View.Stack>
      </div>

      <div style={{ border: "thin solid #eee" }}>
        <h2>Reversed Justify Left</h2>
        <View.Stack padding="sm" justify="left" reverse>
          <CardView padding="lg" margin="sm">
            Item 1
          </CardView>
          <CardView padding="lg" margin="sm">
            Item 2
          </CardView>
          <CardView padding="lg" margin="sm">
            Item 3
          </CardView>
        </View.Stack>
      </div>

      <div style={{ border: "thin solid #eee" }}>
        <h2>Reversed Justify Center</h2>
        <View.Stack padding="sm" justify="center" reverse>
          <CardView padding="lg" margin="sm">
            Item 1
          </CardView>
          <CardView padding="lg" margin="sm">
            Item 2
          </CardView>
          <CardView padding="lg" margin="sm">
            Item 3
          </CardView>
        </View.Stack>
      </div>

      <div style={{ border: "thin solid #eee" }}>
        <h2>Reversed Justify Right</h2>
        <View.Stack padding="sm" justify="right" reverse>
          <CardView padding="lg" margin="sm">
            Item 1
          </CardView>
          <CardView padding="lg" margin="sm">
            Item 2
          </CardView>
          <CardView padding="lg" margin="sm">
            Item 3
          </CardView>
        </View.Stack>
      </div>

      <div style={{ height: "400px", border: "thin solid #eee" }}>
        <h2>Align Top</h2>
        <View.Stack padding="sm" align="top">
          <CardView padding="lg" margin="sm">
            Item 1
          </CardView>
          <CardView padding="lg" margin="sm">
            Item 2
          </CardView>
          <CardView padding="lg" margin="sm">
            Item 3
          </CardView>
        </View.Stack>
      </div>

      <div style={{ height: "400px", border: "thin solid #eee" }}>
        <h2>Reversed Align Top</h2>
        <View.Stack padding="sm" align="top" reverse>
          <CardView padding="lg" margin="sm">
            Item 1
          </CardView>
          <CardView padding="lg" margin="sm">
            Item 2
          </CardView>
          <CardView padding="lg" margin="sm">
            Item 3
          </CardView>
        </View.Stack>
      </div>

      <div style={{ height: "400px", border: "thin solid #eee" }}>
        <h2>Align Middle</h2>
        <View.Stack padding="sm" align="middle">
          <CardView padding="lg" margin="sm">
            Item 1
          </CardView>
          <CardView padding="lg" margin="sm">
            Item 2
          </CardView>
          <CardView padding="lg" margin="sm">
            Item 3
          </CardView>
        </View.Stack>
      </div>

      <div style={{ height: "400px", border: "thin solid #eee" }}>
        <h2>Align Bottom</h2>
        <View.Stack padding="sm" align="bottom">
          <CardView padding="lg" margin="sm">
            Item 1
          </CardView>
          <CardView padding="lg" margin="sm">
            Item 2
          </CardView>
          <CardView padding="lg" margin="sm">
            Item 3
          </CardView>
        </View.Stack>
      </div>

      <div style={{ height: "400px", border: "thin solid #eee" }}>
        <h2>Reversed Align Bottom</h2>
        <View.Stack padding="sm" align="bottom" reverse>
          <CardView padding="lg" margin="sm">
            Item 1
          </CardView>
          <CardView padding="lg" margin="sm">
            Item 2
          </CardView>
          <CardView padding="lg" margin="sm">
            Item 3
          </CardView>
        </View.Stack>
      </div>

      <div style={{ height: "400px", border: "thin solid #eee" }}>
        <h2>Sapce Around</h2>
        <View.Stack padding="sm" space="around">
          <CardView padding="lg" margin="sm">
            Item 1
          </CardView>
          <CardView padding="lg" margin="sm">
            Item 2
          </CardView>
          <CardView padding="lg" margin="sm">
            Item 3
          </CardView>
        </View.Stack>
      </div>

      <div style={{ height: "400px", border: "thin solid #eee" }}>
        <h2>Sapce Between</h2>
        <View.Stack padding="sm" space="between">
          <CardView padding="lg" margin="sm">
            Item 1
          </CardView>
          <CardView padding="lg" margin="sm">
            Item 2
          </CardView>
          <CardView padding="lg" margin="sm">
            Item 3
          </CardView>
        </View.Stack>
      </div>

      <div style={{ height: "400px", border: "thin solid #eee" }}>
        <h2>Sapce Evenly</h2>
        <View.Stack padding="sm" space="evenly">
          <CardView padding="lg" margin="sm">
            Item 1
          </CardView>
          <CardView padding="lg" margin="sm">
            Item 2
          </CardView>
          <CardView padding="lg" margin="sm">
            Item 3
          </CardView>
        </View.Stack>
      </div>

      <div style={{ border: "thin solid #eee" }}>
        <h2>Stretched</h2>
        <View.Stack padding="sm" stretch>
          <CardView padding="lg" margin="sm">
            Item 1
          </CardView>
          <CardView padding="lg" margin="sm">
            Item 2
          </CardView>
          <CardView padding="lg" margin="sm">
            Item 3
          </CardView>
        </View.Stack>
      </div>

      <div style={{ height: "200px" }}>
        <h2>Scroll</h2>
        <View.Stack padding="sm" scroll>
          <CardView padding="lg" margin="sm">
            Item 1
          </CardView>
          <CardView padding="lg" margin="sm">
            Item 2
          </CardView>
          <CardView padding="lg" margin="sm">
            Item 3
          </CardView>
          <CardView padding="lg" margin="sm">
            Item 4
          </CardView>
          <CardView padding="lg" margin="sm">
            Item 5
          </CardView>
          <CardView padding="lg" margin="sm">
            Item 6
          </CardView>
          <CardView padding="lg" margin="sm">
            Item 7
          </CardView>
          <CardView padding="lg" margin="sm">
            Item 8
          </CardView>
        </View.Stack>
      </div>
    </>
  );
}
