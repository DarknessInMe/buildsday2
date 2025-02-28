'use client';
import {
	FC,
	MutableRefObject,
	createContext,
	useContext,
	useRef,
	useCallback,
	useReducer,
	useEffect,
	useState,
} from 'react';
import { ReactNode } from 'react';
import { TREE_IDS_ENUM, RootFactory } from '@buildsday2/decorated-core';
import { INITIAL_STATE, reducer } from './reducer';
import { BuilderActionTypeEnum, IBuilderState, ITreeState } from './typing';
import { PubSub } from './PubSub';
import { buildTreeState } from './utils';

interface IBuilderProviderProps {
	children: ReactNode;
}

export interface IBuilderContextData {
	rootRef: MutableRefObject<ReturnType<RootFactory['getRoot']>>;
	currentTree: ITreeState;
	changeCurrentTree: (treeId: TREE_IDS_ENUM) => void;
	selectSkillById: (skillId: string) => void;
	buySkill: (skillId: string) => void;
	removeSkill: (skillId: string) => void;
	toggleInfamyBonus: () => void;
	builderState: IBuilderState;
}

const BuilderContext = createContext<IBuilderContextData>(null!);

export const BuilderProvider: FC<IBuilderProviderProps> = ({ children }) => {
	const rootRef = useRef(new RootFactory().getRoot());
	const pubSubRef = useRef(new PubSub(rootRef.current));
	const stateRef = useRef(INITIAL_STATE);

	const [state, dispatch] = useReducer(reducer, INITIAL_STATE, (): typeof INITIAL_STATE => ({
		currentTreeId: TREE_IDS_ENUM.MASTERMIND,
		totalPoints: rootRef.current.getPoints(),
		selectedSkillId: '',
		isInfamyBonus: rootRef.current.getDiscountStatus(),
	}));
	stateRef.current = state;

	const [currentTree, setCurrentTree] = useState<ITreeState>(() =>
		buildTreeState(rootRef.current, state.currentTreeId),
	);

	useEffect(() => {
		const unsubscribe = pubSubRef.current.subscribe((root) => {
			setCurrentTree(buildTreeState(root, stateRef.current.currentTreeId));

			const points = root.getPoints();
			const infamyBonus = root.getDiscountStatus();

			if (points !== stateRef.current.totalPoints) {
				dispatch({
					type: BuilderActionTypeEnum.SET_TOTAL_POINTS,
					payload: points,
				});
			}

			if (infamyBonus !== stateRef.current.isInfamyBonus) {
				dispatch({
					type: BuilderActionTypeEnum.SET_INFAMY_BONUS,
					payload: infamyBonus,
				});
			}
		});

		return () => {
			unsubscribe();
		};
	}, []);

	useEffect(() => {
		pubSubRef.current.notify();
	}, [state.currentTreeId]);

	const changeCurrentTree = useCallback((treeId: TREE_IDS_ENUM) => {
		dispatch({
			type: BuilderActionTypeEnum.SET_CURRENT_TREE,
			payload: treeId,
		});
	}, []);

	const selectSkillById = useCallback((skillId: string) => {
		dispatch({
			type: BuilderActionTypeEnum.SELECT_SKILL,
			payload: skillId,
		});
	}, []);

	const buySkill = useCallback((skillId: string) => {
		rootRef.current.buySkill(skillId);
		pubSubRef.current.notify();
	}, []);

	const removeSkill = useCallback((skillId: string) => {
		rootRef.current.removeSkill(skillId);
		pubSubRef.current.notify();
	}, []);

	const toggleInfamyBonus = useCallback(() => {
		rootRef.current.toggleDiscountStatus();
		pubSubRef.current.notify();
	}, []);

	return (
		<BuilderContext.Provider
			value={{
				rootRef,
				currentTree,
				changeCurrentTree,
				buySkill,
				removeSkill,
				selectSkillById,
				toggleInfamyBonus,
				builderState: state,
			}}>
			{children}
		</BuilderContext.Provider>
	);
};

export const useBuilderContext = () => {
	return useContext(BuilderContext);
};
