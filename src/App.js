import React from "react";
import View from "./neatly/View";
import CardView from "./neatly/CardView";
import "./styles.css";

export default function App() {
  return (
    <>
      <div className="view">
        <h1>{"<View />"}</h1>

        <section>
          <h2>Override underlying tag</h2>
          <View padding="sm" as="span">
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
        </section>

        <section>
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
        </section>

        <section>
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
        </section>

        <section>
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
        </section>

        <section>
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
        </section>

        <section>
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
        </section>

        <section>
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
        </section>

        <section>
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
        </section>

        <section>
          <h2>Align Top</h2>
          <View padding="sm" align="top" style={{ height: 200 }}>
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
        </section>

        <section>
          <h2>Align Middle</h2>
          <View padding="sm" align="middle" style={{ height: 200 }}>
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
        </section>

        <section>
          <h2>Align Bottom</h2>
          <View padding="sm" align="bottom" style={{ height: 200 }}>
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
        </section>

        <section>
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
        </section>

        <section>
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
        </section>

        <section>
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
        </section>

        <section>
          <h2>Stretch</h2>
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
        </section>

        <section>
          <h2>Tall</h2>
          <View tall style={{ height: 200 }}>
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
        </section>

        <section>
          <h2>Wrap</h2>
          <View padding="sm" style={{ width: 500 }} wrap>
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
          </View>
        </section>

        <section>
          <h2>Reversed Wrap</h2>
          <View padding="sm" style={{ width: 500 }} wrap="reverse">
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
          </View>
        </section>

        <section>
          <h2>Scroll</h2>
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
        </section>
      </div>

      <div className="view-stack">
        <h1>{"<View.Stack />"}</h1>

        <section>
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
        </section>

        <section>
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
        </section>

        <section>
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
        </section>

        <section>
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
        </section>

        <section>
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
        </section>

        <section>
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
        </section>

        <section>
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
        </section>

        <section>
          <h2>Align Top</h2>
          <View.Stack padding="sm" align="top" style={{ height: 500 }}>
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
        </section>

        <section>
          <h2>Reversed Align Top</h2>
          <View.Stack padding="sm" align="top" style={{ height: 500 }} reverse>
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
        </section>

        <section>
          <h2>Align Middle</h2>
          <View.Stack padding="sm" align="middle" style={{ height: 500 }}>
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
        </section>

        <section>
          <h2>Reversed Align Middle</h2>
          <View.Stack
            padding="sm"
            align="middle"
            style={{ height: 500 }}
            reverse
          >
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
        </section>

        <section>
          <h2>Align Bottom</h2>
          <View.Stack padding="sm" align="bottom" style={{ height: 500 }}>
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
        </section>

        <section>
          <h2>Reversed Align Bottom</h2>
          <View.Stack
            padding="sm"
            align="bottom"
            style={{ height: 500 }}
            reverse
          >
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
        </section>

        <section>
          <h2>Sapce Around</h2>
          <View.Stack padding="sm" space="around" style={{ height: 500 }}>
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
        </section>

        <section>
          <h2>Sapce Between</h2>
          <View.Stack padding="sm" space="between" style={{ height: 500 }}>
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
        </section>

        <section>
          <h2>Sapce Evenly</h2>
          <View.Stack padding="sm" space="evenly" style={{ height: 500 }}>
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
        </section>

        <section>
          <h2>Stretch</h2>
          <View.Stack stretch>
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
        </section>

        <section>
          <h2>Tall</h2>
          <View.Stack padding="sm" style={{ height: 500 }} tall>
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
        </section>

        <section>
          <h2>Scroll</h2>
          <View.Stack padding="sm" style={{ height: 300 }} scroll>
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
        </section>
      </div>
    </>
  );
}
