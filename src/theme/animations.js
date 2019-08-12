import { keyframes } from "@emotion/core"

const animations = {
  iconLoadingAnim: keyframes`
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
`,
  iconHoverAnim: keyframes`
  33% {
    transform:  scale(1);
    }
  66% {
    transform: scale(0.8);
  }
`,
}

export default animations
