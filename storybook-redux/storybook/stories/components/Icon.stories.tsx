import { storiesOf } from "@storybook/react-native";
import {Icon} from "components";
import CenterView from "../CenterView";

const Icon1 = require("assets/images/bookmark.png");

storiesOf("Icon", module)
    .addDecorator((getStory)=>(
        <CenterView>
            {getStory()}
        </CenterView>
    ))
    .add("Default",()=>(
        <Icon icon={Icon1} onPress={()=>{}}/>
    ))