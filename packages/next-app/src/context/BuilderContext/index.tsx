'use client';
import {
	FC,
	MutableRefObject,
	createContext,
	useContext,
	useRef,
	useCallback,
	useReducer,
	useMemo,
} from 'react';
import { ReactNode } from 'react';
import {
	TREE_IDS_ENUM,
	RootFactory,
	SUBTREE_IDS_ENUM,
	SKILL_IDS_ENUM,
} from '@buildsday2/decorated-core';
import { INITIAL_STATE, reducer } from './reducer';
import { BuilderActionTypeEnum, IBuilderState, ITreeState } from './typing';

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
	builderState: IBuilderState;
}

const BuilderContext = createContext<IBuilderContextData>(null!);

export const BuilderProvider: FC<IBuilderProviderProps> = ({ children }) => {
	const rootRef = useRef(new RootFactory().getRoot());

	const [state, dispatch] = useReducer(reducer, INITIAL_STATE, (): typeof INITIAL_STATE => ({
		currentTreeId: TREE_IDS_ENUM.MASTERMIND,
		totalPoints: rootRef.current.getPoints(),
		selectedSkillId: '',
	}));
	const currentTree: ITreeState = useMemo(() => {
		const treeEntity = rootRef.current.getTrees().get(state.currentTreeId)!;

		return {
			id: treeEntity.id as TREE_IDS_ENUM,
			name: treeEntity.name,
			subtrees: [...treeEntity.children.values()].map((subtree) => ({
				id: subtree.id as SUBTREE_IDS_ENUM,
				name: subtree.name,
				points: subtree.getInvestedPoints(),
				skills: [...subtree.children.values()].map((skill) => ({
					id: skill.id as SKILL_IDS_ENUM,
					name: skill.name,
					description: skill.description,
					price: skill.getPrice(skill.getHigherStatus()),
					status: skill.getStatus(),
				})),
			})),
		};
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
	}, []);

	const removeSkill = useCallback((skillId: string) => {
		rootRef.current.removeSkill(skillId);
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
				builderState: state,
			}}>
			{children}
		</BuilderContext.Provider>
	);
};

export const useBuilderContext = () => {
	return useContext(BuilderContext);
};
