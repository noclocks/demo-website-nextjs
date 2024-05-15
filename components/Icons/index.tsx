import {
  Facebook,
  LucideProps,
  Moon,
  SunMedium,
  Twitter,
  type Icon as LucideIcon,
} from "lucide-react"

export type Icon = LucideIcon

import { NoClocksIcon } from './NoClocksIcon';
import { GithubIcon } from "./GitHubIcon";
import { LinkedinIcon } from "./LinkedInIcon";
import { FacebookIcon } from "./FacebookIcon";
import { SearchIcon } from "./SearchIcon";
import { SettingsIcon } from "./SettingsIcon";
import { MergeIcon } from "./MergeIcon";
import { InboxIcon } from "./InboxIcon";
import { LockIcon } from "./LockIcon";

export { FacebookIcon } from './FacebookIcon';
export { GithubIcon } from './GitHubIcon';
export { LinkedinIcon } from './LinkedInIcon';
export { TwitterIcon } from './TwitterIcon';
export { YoutubeIcon } from './YoutubeIcon';
export { InboxIcon } from './InboxIcon';
export { MergeIcon } from './MergeIcon';
export { SettingsIcon } from './SettingsIcon';
export { SearchIcon } from './SearchIcon';
export { LockIcon } from './LockIcon';
export { NoClocksIcon } from './NoClocksIcon';

export const Icons = {
  sun: SunMedium,
  moon: Moon,
  twitter: Twitter,
  logo: NoClocksIcon,
  github: GithubIcon,
  gitHubAlt: (props: LucideProps) => (
    <svg viewBox="0 0 438.549 438.549" {...props}>
      <path
        fill="currentColor"
        d="M75.195,72.96c-0.619,0-1.241-0.21-1.75-0.64c-1.146-0.967-1.291-2.681-0.324-3.827l15.609-18.493      L73.122,31.507c-0.967-1.146-0.822-2.859,0.324-3.827c1.146-0.968,2.859-0.823,3.827,0.323L94.36,48.248      c0.854,1.012,0.854,2.492,0,3.503L77.272,71.995C76.735,72.632,75.968,72.96,75.195,72.96z"
      ></path>
    </svg>
  ),
  linkedin: LinkedinIcon,
  facebook: FacebookIcon,
  search: SearchIcon,
  settings: SettingsIcon,
  merge: MergeIcon,
  inbox: InboxIcon,
  lock: LockIcon
}
