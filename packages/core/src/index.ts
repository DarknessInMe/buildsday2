import { Root } from './Root';
import { SkillIdsEnum } from './shared/enums';

const root = new Root();

root.onChange((changes) => {
    console.log('Change!', JSON.stringify(changes, null, 2))
})

root.buySkill(SkillIdsEnum.INSPIRE);