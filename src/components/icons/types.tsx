export type IconSize = `xxsmall` | `xsmall` | `small` | `medium` | `large`

export type IconSkeletonProps = Omit<JSX.IntrinsicElements['svg'], 'ref'> & {
  iconName: string;
  size?: IconSize;
  applyColorToStroke?: boolean;
}

export type IconProps = Omit<IconSkeletonProps, 'iconName' | 'applyColorToStroke'>
