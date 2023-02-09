import {Profile} from "@components";
import { storiesOf } from "@storybook/react-native";
import CenterView from "../CenterView";

storiesOf("Profile", module)
    .addDecorator(getStory=>(
        <CenterView>
            {getStory()}
        </CenterView>
    ))
    .add("Default",()=>(
        <Profile/>
    ))