import { BASIC_TYPE, ComputedStatsObject, SKILL_TYPE } from 'lib/conditionals/conditionalConstants'
import { buffAbilityDmg } from 'lib/optimizer/calculateBuffs'
import { TsUtils } from 'lib/TsUtils'
import { ContentItem } from 'types/Conditionals'
import { SuperImpositionLevel } from 'types/LightCone'
import { LightConeConditional } from 'types/LightConeConditionals'
import { OptimizerAction, OptimizerContext } from 'types/Optimizer'

export default (s: SuperImpositionLevel, withContent: boolean): LightConeConditional => {
  const t = TsUtils.wrappedFixedT(withContent).get(null, 'conditionals', 'Lightcones.CollapsingSky')

  const sValues = [0.20, 0.25, 0.30, 0.35, 0.40]

  const content: ContentItem[] = [
    {
      lc: true,
      id: 'basicSkillDmgBuff',
      formItem: 'switch',
      text: t('Content.basicSkillDmgBuff.text'),
      content: t('Content.basicSkillDmgBuff.content', { DmgBuff: TsUtils.precisionRound(100 * sValues[s]) }),
    },
  ]

  return {
    content: () => content,
    defaults: () => ({
      basicSkillDmgBuff: true,
    }),
    precomputeEffects: (x: ComputedStatsObject, action: OptimizerAction, context: OptimizerContext) => {
      const r = action.lightConeConditionals

      buffAbilityDmg(x, BASIC_TYPE | SKILL_TYPE, sValues[s], (r.basicSkillDmgBuff))
    },
    finalizeCalculations: () => {
    },
  }
}
