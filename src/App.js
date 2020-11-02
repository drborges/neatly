import React from "react";
import View from "./neatly/View";
import CardView from "./neatly/CardView";
import "./styles.css";

export default function App() {
  return (
    <>
      <div style={{ border: "thin solid #eee" }}>
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

      <div style={{ border: "thin solid #eee" }}>
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

      <div style={{ border: "thin solid #eee" }}>
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

      <div style={{ height: "400px", border: "thin solid #eee" }}>
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

      <div style={{ height: "400px", border: "thin solid #eee" }}>
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

      <div style={{ border: "thin solid #eee" }}>
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

      <div style={{ height: "400px", border: "thin solid #eee" }}>
        <View padding="sm" tall>
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
        <View padding="sm" wrap>
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
        <View padding="sm" wrap="reverse">
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
        <View padding="sm" scroll>
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

      <div style={{ height: "200px" }}>
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
