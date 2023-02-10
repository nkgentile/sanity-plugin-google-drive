import styled from 'styled-components'

type AspectRatioProps = {
  /**
   * The width divided by the height. This ratio can be passed in
   * using JavaScript division syntax. So, to get a 16:9 ratio,
   * simply pass `ratio={16/9}`.
   */
  ratio: number
}

export const AspectRatio = styled.div<AspectRatioProps>`
  position: relative;

  box-sizing: border-box;

  --aspect-ratio: ${(props) => (1 / (props.ratio ?? 1)) * 100}%;

  &::before {
    content: '';

    display: block;
    box-sizing: border-box;

    padding-top: var(--aspect-ratio);
  }

  & > * {
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    box-sizing: border-box;
  }
`
