/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {CompositeScreenProps, NavigatorScreenParams} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {IOverviewScreenProps} from "./screens/api/IOverviewScreenProps";
import {ISleepModalProps} from "./screens/modal/api/ISleepModalProps";
import {INotFoundProps} from "./screens/api/INotFoundProps";
import {IEmotionsModalProps} from "./screens/modal/api/IEmotionsModalProps";
import {IStatusModalProps} from "./screens/modal/api/IStatusModalProps";

declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList {
        }
    }
}

export type RootStackParamList = {
    Root: NavigatorScreenParams<RootTabParamList> | undefined;
    SleepModal: ISleepModalProps;
    EmotionsModal: IEmotionsModalProps;
    StatusModal: IStatusModalProps;
    NotFound: INotFoundProps;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
    NativeStackScreenProps<RootStackParamList, Screen>;

export type RootTabParamList = {
    OverviewScreen: IOverviewScreenProps;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
    CompositeScreenProps<BottomTabScreenProps<RootTabParamList, Screen>, NativeStackScreenProps<RootStackParamList>>;
