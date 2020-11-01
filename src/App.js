import React from "react";
import View from "./neatly/View";
import CardView from "./neatly/CardView";
import "./styles.css";

export default function App() {
  return (
    <>
      <View padding="sm" stretched scroll>
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

      <View.Stack padding="sm" stretched>
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

      <View padding="sm" scroll stretched>
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
      </View>

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
        </View.Stack>
      </div>
    </>
  );
}
