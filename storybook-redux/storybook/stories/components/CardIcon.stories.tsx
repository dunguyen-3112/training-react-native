import { storiesOf } from "@storybook/react-native";
import { CardIcon } from "components";
import { useState } from "react";
import { Button } from "react-native";
import CenterView from "../CenterView";

const beveragesIcon = require("@assets/images/beverages.png");
const BreadIcon = require("@assets/images/Bread.png");
const EggIcon = require("@assets/images/Egg.png");
const FrozenVegIcon = require("@assets/images/FrozenVeg.png");
const FruitIcon = require("@assets/images/Fruit.png");
const HomecareIcon = require("@assets/images/Homecare.png");
const PetcareIcon = require("@assets/images/Petcare.png");
const VegetablesIcon = require("@assets/images/Vegetables.png");

storiesOf("CardWithIcon", module)
    .addDecorator((getStory)=>(
        <CenterView>
            {getStory()}
            <Button title="Egg" />
        </CenterView>
    ))
    .add("beverages",()=>(
        <CardIcon icon={beveragesIcon} title="Beverages"/>
    )).add("Bread",()=>(
        <CardIcon icon={BreadIcon} title="Bread"/>
    )).add("Egg",()=>(
        <CardIcon icon={EggIcon} title="Egg"/>
    )).add("FrozenVeg",()=>(
        <CardIcon icon={FrozenVegIcon} title="FrozenVeg"/>
    )).add("Fruit",()=>(
        <CardIcon icon={FruitIcon} title="Fruit"/>
    )).add("Homecare",()=>(
        <CardIcon icon={HomecareIcon} title="Homecare"/>
    ))