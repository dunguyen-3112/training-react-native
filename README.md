# Practice - React Native

## 1. Overview

-   Build an Healthy Food application using React Native.
-   Design [Link](<https://www.figma.com/file/LLkkEV64nhoR8empRw79Kl/Healthy-Food-App-(Community)?node-id=201%3A144&t=iVpH44LU0tyuYvtG-0>)
-   Estimate [Link](https://docs.google.com/document/d/1Jvl29kde7wCuMfnNveRaB5h_X4srX4RId8C_CJ51KsU/edit#)

## 2. Technical

-   React Native
-   React Hooks
-   React Navigation
-   Storybook
-   Json server

## 3. Editor

-   Vs code

## 4. Target

-   This practice will let you understand more about React Native
-   Apply [React Navigation](https://reactnavigation.org/)
-   Apply Storybook to test application, Unit test coverage should greater than 80%

## 5. Getting Started

-   Node: v.18
-   React: v.18.1.0
-   React Native: v.0.70.5
-   expo: v.47.0.13

-   Clone repository:

    > ```
    > git clone https://github.com/dunguyen-3112/training-react-native.git
    > ```

-   Check out the branch: develop

    > ````
    > git checkout develop
    > > ```
    > ````

        > ```
        > cd app
        > ```

-   Install package dependencies:

*   use npm:

    > ```
    > npm install
    > ```

*   Use yarn:
    > ```
    > yarn install
    > ```

-   Run application:

*   Get ipv4 system and change and :

```
    // line 5 in constants/API.ts
    const ip = <ipv4>
    //Example: const ip = '192.168.1.8'

    // line 8 in file packages.json
```

{
...
scripts:{
...

        "server": "npx json-server --host <ipv4> ./data/db.json",
        ...
    }
    ...

}

````

* Type cmd to run application:

    > ```
    > yarn server & yarn android
    > ```

-   use ubuntu:

> ```
> ./run.bash
> ```

## 6. Author

-   Du Nguyen
````
