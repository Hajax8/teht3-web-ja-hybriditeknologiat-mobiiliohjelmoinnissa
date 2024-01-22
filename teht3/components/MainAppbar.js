import { Appbar } from "react-native-paper";
import React from 'react'

export default function MainAppbar(props) {
    return (
        <Appbar.Header
            mode="center-aligned"
            elevated={true}
        >
            <Appbar.Content title={props.title} />
        </Appbar.Header>
    )
}