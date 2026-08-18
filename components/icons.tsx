import type { ReactNode, SVGProps } from "react";

export type IconProps = SVGProps<SVGSVGElement> & {
  strokeWidth?: number | string;
};

function Icon({
  strokeWidth = 1.5,
  className,
  children,
  ...props
}: IconProps & { children: ReactNode }) {
  const labelled = Boolean(props["aria-label"] || props["aria-labelledby"]);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      className={className}
      {...props}
      aria-hidden={labelled ? props["aria-hidden"] : true}
    >
      {children}
    </svg>
  );
}

export function Sun01Icon({ strokeWidth = 1.5, ...props }: IconProps) {
  return (
    <Icon strokeWidth={strokeWidth} {...props}>
      <path
        d="M16.9991 12C16.9991 14.7614 14.7605 17 11.9991 17C9.23766 17 6.99908 14.7614 6.99908 12C6.99908 9.23858 9.23766 7 11.9991 7C14.7605 7 16.9991 9.23858 16.9991 12Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.1247 3.25H11.9997M12.1242 20.75H11.9992M20.75 12.125V12M3.25 12.125V12M18.2752 5.90098L18.1868 5.81259M5.90051 18.275L5.81212 18.1866M18.0987 18.2756L18.187 18.1872M5.72429 5.9012L5.81267 5.81282M12.2497 3.25C12.2497 3.38807 12.1378 3.5 11.9997 3.5C11.8616 3.5 11.7497 3.38807 11.7497 3.25C11.7497 3.11193 11.8616 3 11.9997 3C12.1378 3 12.2497 3.11193 12.2497 3.25ZM12.2492 20.75C12.2492 20.8881 12.1373 21 11.9992 21C11.8611 21 11.7492 20.8881 11.7492 20.75C11.7492 20.6119 11.8611 20.5 11.9992 20.5C12.1373 20.5 12.2492 20.6119 12.2492 20.75ZM20.75 12.25C20.6119 12.25 20.5 12.1381 20.5 12C20.5 11.8619 20.6119 11.75 20.75 11.75C20.8881 11.75 21 11.8619 21 12C21 12.1381 20.8881 12.25 20.75 12.25ZM3.25 12.25C3.11193 12.25 3 12.1381 3 12C3 11.8619 3.11193 11.75 3.25 11.75C3.38807 11.75 3.5 11.8619 3.5 12C3.5 12.1381 3.38807 12.25 3.25 12.25ZM18.3636 5.98937C18.266 6.087 18.1077 6.087 18.01 5.98937C17.9124 5.89174 17.9124 5.73345 18.01 5.63582C18.1077 5.53819 18.266 5.53819 18.3636 5.63582C18.4612 5.73345 18.4612 5.89174 18.3636 5.98937ZM5.9889 18.3634C5.89127 18.461 5.73297 18.461 5.63534 18.3634C5.53771 18.2658 5.53771 18.1075 5.63534 18.0099C5.73297 17.9122 5.89127 17.9122 5.9889 18.0099C6.08653 18.1075 6.08653 18.2658 5.9889 18.3634ZM18.0103 18.364C17.9126 18.2663 17.9126 18.108 18.0103 18.0104C18.1079 17.9128 18.2662 17.9128 18.3638 18.0104C18.4614 18.108 18.4614 18.2663 18.3638 18.364C18.2662 18.4616 18.1079 18.4616 18.0103 18.364ZM5.6359 5.98959C5.53827 5.89196 5.53827 5.73367 5.6359 5.63604C5.73353 5.53841 5.89182 5.53841 5.98945 5.63604C6.08708 5.73367 6.08708 5.89196 5.98945 5.98959C5.89182 6.08722 5.73353 6.08722 5.6359 5.98959Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
}

export function Moon01Icon({ strokeWidth = 1.5, ...props }: IconProps) {
  return (
    <Icon strokeWidth={strokeWidth} {...props}>
      <path d="M21.0985 7.84477C20.458 8.55417 19.5311 9 18.5 9C16.567 9 15 7.433 15 5.5C15 4.46895 15.4458 3.54203 16.1552 2.90149M16.1552 2.90149C18.3384 3.90018 20.0998 5.66155 21.0985 7.84477C21.6774 9.11025 22 10.5174 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C13.4826 2 14.8898 2.32262 16.1552 2.90149Z" />
      <path d="M16 16C16 17.1046 15.1046 18 14 18C12.8954 18 12 17.1046 12 16C12 14.8954 12.8954 14 14 14C15.1046 14 16 14.8954 16 16Z" />
      <path
        d="M7.13086 14H7.00586M7.25586 14C7.25586 14.1381 7.14393 14.25 7.00586 14.25C6.86779 14.25 6.75586 14.1381 6.75586 14C6.75586 13.8619 6.86779 13.75 7.00586 13.75C7.14393 13.75 7.25586 13.8619 7.25586 14Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.1309 8H10.0059M10.2559 8C10.2559 8.13807 10.1439 8.25 10.0059 8.25C9.86779 8.25 9.75586 8.13807 9.75586 8C9.75586 7.86193 9.86779 7.75 10.0059 7.75C10.1439 7.75 10.2559 7.86193 10.2559 8Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
}

export function Menu01Icon({ strokeWidth = 1.5, ...props }: IconProps) {
  return (
    <Icon strokeWidth={strokeWidth} {...props}>
      <path d="M4 5L20 5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 12L20 12" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 19L20 19" strokeLinecap="round" strokeLinejoin="round" />
    </Icon>
  );
}

export function Cancel01Icon({ strokeWidth = 1.5, ...props }: IconProps) {
  return (
    <Icon strokeWidth={strokeWidth} {...props}>
      <path
        d="M18 6L6.00081 17.9992M17.9992 18L6 6.00085"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
}

export function ArrowUpRight01Icon({ strokeWidth = 1.5, ...props }: IconProps) {
  return (
    <Icon strokeWidth={strokeWidth} {...props}>
      <path
        d="M9 6.65032C9 6.65032 15.9383 6.10759 16.9154 7.08463C17.8924 8.06167 17.3496 15 17.3496 15M16.5 7.5L6.5 17.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
}

export function CheckmarkCircle01Icon({ strokeWidth = 1.5, ...props }: IconProps) {
  return (
    <Icon strokeWidth={strokeWidth} {...props}>
      <path d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z" />
      <path
        d="M8 12.75C8 12.75 9.6 13.6625 10.4 15C10.4 15 12.8 9.75 16 8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
}

export function HelpCircleIcon({ strokeWidth = 1.5, ...props }: IconProps) {
  return (
    <Icon strokeWidth={strokeWidth} {...props}>
      <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M9.5 9.5C9.5 8.11929 10.6193 7 12 7C13.3807 7 14.5 8.11929 14.5 9.5C14.5 10.3569 14.0689 11.1131 13.4117 11.5636C12.7283 12.0319 12 12.6716 12 13.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.125 16.75H12M12.25 16.75C12.25 16.8881 12.1381 17 12 17C11.8619 17 11.75 16.8881 11.75 16.75C11.75 16.6119 11.8619 16.5 12 16.5C12.1381 16.5 12.25 16.6119 12.25 16.75Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
}

export function Mail01Icon({ strokeWidth = 1.5, ...props }: IconProps) {
  return (
    <Icon strokeWidth={strokeWidth} {...props}>
      <path
        d="M2 6L8.91302 9.91697C11.4616 11.361 12.5384 11.361 15.087 9.91697L22 6"
        strokeLinejoin="round"
      />
      <path
        d="M2.01577 13.4756C2.08114 16.5412 2.11383 18.0739 3.24496 19.2094C4.37608 20.3448 5.95033 20.3843 9.09883 20.4634C11.0393 20.5122 12.9607 20.5122 14.9012 20.4634C18.0497 20.3843 19.6239 20.3448 20.7551 19.2094C21.8862 18.0739 21.9189 16.5412 21.9842 13.4756C22.0053 12.4899 22.0053 11.5101 21.9842 10.5244C21.9189 7.45886 21.8862 5.92609 20.7551 4.79066C19.6239 3.65523 18.0497 3.61568 14.9012 3.53657C12.9607 3.48781 11.0393 3.48781 9.09882 3.53656C5.95033 3.61566 4.37608 3.65521 3.24495 4.79065C2.11382 5.92608 2.08114 7.45885 2.01576 10.5244C1.99474 11.5101 1.99475 12.4899 2.01577 13.4756Z"
        strokeLinejoin="round"
      />
    </Icon>
  );
}

export function Award01Icon({ strokeWidth = 1.5, ...props }: IconProps) {
  return (
    <Icon strokeWidth={strokeWidth} {...props}>
      <path d="M12 12V18" strokeLinecap="round" />
      <path
        d="M12 18C10.3264 18 8.86971 19.012 8.11766 20.505C7.75846 21.218 8.27389 22 8.95877 22H15.0412C15.7261 22 16.2415 21.218 15.8823 20.505C15.1303 19.012 13.6736 18 12 18Z"
        strokeLinecap="round"
      />
      <path
        d="M5 5H3.98471C2.99819 5 2.50493 5 2.20017 5.37053C1.89541 5.74106 1.98478 6.15597 2.16352 6.9858C2.50494 8.57086 3.24548 9.9634 4.2489 11"
        strokeLinecap="round"
      />
      <path
        d="M19 5H20.0153C21.0018 5 21.4951 5 21.7998 5.37053C22.1046 5.74106 22.0152 6.15597 21.8365 6.9858C21.4951 8.57086 20.7545 9.9634 19.7511 11"
        strokeLinecap="round"
      />
      <path
        d="M12 12C15.866 12 19 8.8831 19 5.03821C19 4.93739 18.9978 4.83707 18.9936 4.73729C18.9509 3.73806 18.9295 3.23845 18.2523 2.61922C17.5751 2 16.8247 2 15.324 2H8.67596C7.17526 2 6.42492 2 5.74772 2.61922C5.07051 3.23844 5.04915 3.73806 5.00642 4.73729C5.00215 4.83707 5 4.93739 5 5.03821C5 8.8831 8.13401 12 12 12Z"
        strokeLinecap="round"
      />
    </Icon>
  );
}

export function BookOpen01Icon({ strokeWidth = 1.5, ...props }: IconProps) {
  return (
    <Icon strokeWidth={strokeWidth} {...props}>
      <path
        d="M5.33333 3.00001C7.79379 2.99657 10.1685 3.88709 12 5.5V21C10.1685 19.3871 7.79379 18.4966 5.33333 18.5C3.77132 18.5 2.99032 18.5 2.64526 18.2792C2.4381 18.1466 2.35346 18.0619 2.22086 17.8547C2 17.5097 2 16.8941 2 15.6629V6.40322C2 4.97543 2 4.26154 2.54874 3.68286C3.09748 3.10418 3.65923 3.07432 4.78272 3.0146C4.965 3.00491 5.14858 3.00001 5.33333 3.00001Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.6667 3.00001C16.2062 2.99657 13.8315 3.88709 12 5.5V21C13.8315 19.3871 16.2062 18.4966 18.6667 18.5C20.2287 18.5 21.0097 18.5 21.3547 18.2792C21.5619 18.1466 21.6465 18.0619 21.7791 17.8547C22 17.5097 22 16.8941 22 15.6629V6.40322C22 4.97543 22 4.26154 21.4513 3.68286C20.9025 3.10418 20.3408 3.07432 19.2173 3.0146C19.035 3.00491 18.8514 3.00001 18.6667 3.00001Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
}

export function GlobeIcon({ strokeWidth = 1.5, ...props }: IconProps) {
  return (
    <Icon strokeWidth={strokeWidth} {...props}>
      <path d="M12.5 19L12.5 22" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10.5 22H14.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="7" cy="7" r="7" transform="matrix(-1 0 0 1 20.5 2)" strokeLinecap="round" />
      <path
        d="M8.5 4C9.15431 4.0385 9.49236 4.35899 10.0735 4.97301C11.1231 6.08206 12.1727 6.1746 12.8724 5.80492C13.922 5.2504 13.04 4.35221 14.2719 3.86409C15.0748 3.54595 15.1868 2.68026 14.7399 2"
        strokeLinejoin="round"
      />
      <path
        d="M20 10C18.5 10 18.2338 11.2468 17 11C14.5 10.5 13.7916 11.0589 13.7916 12.2511C13.7916 13.4432 13.7916 13.4432 13.2717 14.3373C12.9335 14.9189 12.8153 15.5004 13.4894 16"
        strokeLinejoin="round"
      />
      <path
        d="M6.5 2C4.64864 3.79995 3.5 6.3082 3.5 9.08251C3.5 14.5598 7.97715 19 13.5 19C16.2255 19 18.6962 17.9187 20.5 16.165"
        strokeLinecap="round"
      />
    </Icon>
  );
}

export function Building01Icon({ strokeWidth = 1.5, ...props }: IconProps) {
  return (
    <Icon strokeWidth={strokeWidth} {...props}>
      <path d="M4 22H20" strokeLinecap="round" />
      <path d="M17 9H14M18 13H14M18 17H14" strokeLinecap="round" />
      <path
        d="M6 22V3.2C6 2.42385 6.47098 2 7.2 2C8.87221 2 9.70832 2 10.4079 2.1108C14.2589 2.72075 17.2793 5.74106 17.8892 9.59209C18 10.2917 18 11.1278 18 12.8V22"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
}

export function GraduationScrollIcon({ strokeWidth = 1.5, ...props }: IconProps) {
  return (
    <Icon strokeWidth={strokeWidth} {...props}>
      <path d="M21.1609 9.92846C22.1928 9.54155 22.2858 7.69292 21.3685 5.79943C20.4512 3.90594 18.8711 2.68462 17.8391 3.07154M21.1609 9.92846C20.1289 10.3154 18.5488 9.09406 17.6315 7.20057C16.7142 5.30708 16.8072 3.45845 17.8391 3.07154M21.1609 9.92846L6.16089 18.9285C5.12895 19.3154 3.54878 18.0941 2.6315 16.2006C1.71421 14.3071 1.80716 12.4584 2.83911 12.0715L17.8391 3.07154" />
      <path d="M15 13.6072C13.6383 13.0342 10.9233 10.9509 10.9574 7.20117M11.5 15.7012C10.3333 15.1444 7.9 13.0787 7.5 9.26966" />
      <path
        d="M15.43 14C16.0276 15.1302 16.639 18.1124 14.5498 21L13.5632 19.584L11 20.8103C11 20.8103 12.8249 18.8868 11.9528 16"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
}

export function UserGroupIcon({ strokeWidth = 1.5, ...props }: IconProps) {
  return (
    <Icon strokeWidth={strokeWidth} {...props}>
      <path
        d="M15.5 11C15.5 9.067 13.933 7.5 12 7.5C10.067 7.5 8.5 9.067 8.5 11C8.5 12.933 10.067 14.5 12 14.5C13.933 14.5 15.5 12.933 15.5 11Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.4827 11.3499C15.8047 11.4475 16.1462 11.5 16.5 11.5C18.433 11.5 20 9.933 20 8C20 6.067 18.433 4.5 16.5 4.5C14.6851 4.5 13.1928 5.8814 13.0173 7.65013"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.9827 7.65013C10.8072 5.8814 9.31492 4.5 7.5 4.5C5.567 4.5 4 6.067 4 8C4 9.933 5.567 11.5 7.5 11.5C7.85381 11.5 8.19535 11.4475 8.51727 11.3499"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 16.5C22 13.7386 19.5376 11.5 16.5 11.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.5 19.5C17.5 16.7386 15.0376 14.5 12 14.5C8.96243 14.5 6.5 16.7386 6.5 19.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.5 11.5C4.46243 11.5 2 13.7386 2 16.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
}

export function ClockIcon({ strokeWidth = 1.5, ...props }: IconProps) {
  return (
    <Icon strokeWidth={strokeWidth} {...props}>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 8V12L14 14" strokeLinecap="round" strokeLinejoin="round" />
    </Icon>
  );
}

export function FlashIcon({ strokeWidth = 1.5, ...props }: IconProps) {
  return (
    <Icon strokeWidth={strokeWidth} {...props}>
      <path
        d="M5.22576 11.3294L12.224 2.34651C12.7713 1.64397 13.7972 2.08124 13.7972 3.01707V9.96994C13.7972 10.5305 14.1995 10.985 14.6958 10.985H18.0996C18.8729 10.985 19.2851 12.0149 18.7742 12.6706L11.776 21.6535C11.2287 22.356 10.2028 21.9188 10.2028 20.9829V14.0301C10.2028 13.4695 9.80048 13.015 9.3042 13.015H5.90035C5.12711 13.015 4.71494 11.9851 5.22576 11.3294Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
}

export function DollarCircleIcon({ strokeWidth = 1.5, ...props }: IconProps) {
  return (
    <Icon strokeWidth={strokeWidth} {...props}>
      <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" />
      <path
        d="M14.7102 10.0611C14.6111 9.29844 13.7354 8.06622 12.1608 8.06619C10.3312 8.06616 9.56136 9.07946 9.40515 9.58611C9.16145 10.2638 9.21019 11.6571 11.3547 11.809C14.0354 11.999 15.1093 12.3154 14.9727 13.956C14.836 15.5965 13.3417 15.951 12.1608 15.9129C10.9798 15.875 9.04764 15.3325 8.97266 13.8733M11.9734 6.99805V8.06982M11.9734 15.9031V16.998"
        strokeLinecap="round"
      />
    </Icon>
  );
}

export function ComputerIcon({ strokeWidth = 1.5, ...props }: IconProps) {
  return (
    <Icon strokeWidth={strokeWidth} {...props}>
      <path
        d="M14 21H16M14 21C13.1716 21 12.5 20.3284 12.5 19.5V17L12 17M14 21H10M10 21H8M10 21C10.8284 21 11.5 20.3284 11.5 19.5V17L12 17M12 17V21"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 3H8C5.17157 3 3.75736 3 2.87868 3.87868C2 4.75736 2 6.17157 2 9V11C2 13.8284 2 15.2426 2.87868 16.1213C3.75736 17 5.17157 17 8 17H16C18.8284 17 20.2426 17 21.1213 16.1213C22 15.2426 22 13.8284 22 11V9C22 6.17157 22 4.75736 21.1213 3.87868C20.2426 3 18.8284 3 16 3Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
}

export function HeartCheckIcon({ strokeWidth = 1.5, ...props }: IconProps) {
  return (
    <Icon strokeWidth={strokeWidth} {...props}>
      <path
        d="M13 20.3025C12.1525 20.6505 11.1746 20.5389 10.4107 19.9677C7.58942 17.858 2 13.0348 2 8.69444C2 5.82563 4.10526 3.5 7 3.5C8.5 3.5 10 4 12 6C14 4 15.5 3.5 17 3.5C19.8947 3.5 22 5.82563 22 8.69444C22 9.12591 21.9448 9.56214 21.8425 10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 17C14 17 15 17 16 19C16 19 19.1765 14 22 13"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
}

export function Video01Icon({ strokeWidth = 1.5, ...props }: IconProps) {
  return (
    <Icon strokeWidth={strokeWidth} {...props}>
      <path d="M2 11C2 7.70017 2 6.05025 3.02513 5.02513C4.05025 4 5.70017 4 9 4H10C13.2998 4 14.9497 4 15.9749 5.02513C17 6.05025 17 7.70017 17 11V13C17 16.2998 17 17.9497 15.9749 18.9749C14.9497 20 13.2998 20 10 20H9C5.70017 20 4.05025 20 3.02513 18.9749C2 17.9497 2 16.2998 2 13V11Z" />
      <path
        d="M17 8.90585L17.1259 8.80196C19.2417 7.05623 20.2996 6.18336 21.1498 6.60482C22 7.02628 22 8.42355 22 11.2181V12.7819C22 15.5765 22 16.9737 21.1498 17.3952C20.2996 17.8166 19.2417 16.9438 17.1259 15.198L17 15.0941"
        strokeLinecap="round"
      />
      <circle cx="11.5" cy="9.5" r="1.5" />
    </Icon>
  );
}

export function ChipIcon({ strokeWidth = 1.5, ...props }: IconProps) {
  return (
    <Icon strokeWidth={strokeWidth} {...props}>
      <path
        d="M4 12C4 8.22876 4 6.34315 5.17157 5.17157C6.34315 4 8.22876 4 12 4C15.7712 4 17.6569 4 18.8284 5.17157C20 6.34315 20 8.22876 20 12C20 15.7712 20 17.6569 18.8284 18.8284C17.6569 20 15.7712 20 12 20C8.22876 20 6.34315 20 5.17157 18.8284C4 17.6569 4 15.7712 4 12Z"
        strokeLinejoin="round"
      />
      <path
        d="M7.73223 16.2678C8.46447 17 9.64298 17 12 17C12.7898 17 13.4473 17 14 16.9724L16.9724 14C17 13.4473 17 12.7898 17 12C17 9.64298 17 8.46447 16.2678 7.73223C15.5355 7 14.357 7 12 7C9.64298 7 8.46447 7 7.73223 7.73223C7 8.46447 7 9.64298 7 12C7 14.357 7 15.5355 7.73223 16.2678Z"
        strokeLinejoin="round"
      />
      <path
        d="M8 2V4M16 2V4M12 2V4M8 20V22M12 20V22M16 20V22M22 16H20M4 8H2M4 16H2M4 12H2M22 8H20M22 12H20"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
}

export function Wifi01Icon({ strokeWidth = 1.5, ...props }: IconProps) {
  return (
    <Icon strokeWidth={strokeWidth} {...props}>
      <path
        d="M8.25 14.5C10.25 12.5 13.75 12.5 15.75 14.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.5 11.5C14.7324 8.16667 9.5 8.16667 5.5 11.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 8.5C8.31579 3.16669 15.6842 3.16668 22 8.49989"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="18" r="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </Icon>
  );
}

export function Location01Icon({ strokeWidth = 1.5, ...props }: IconProps) {
  return (
    <Icon strokeWidth={strokeWidth} {...props}>
      <path d="M13.6177 21.367C13.1841 21.773 12.6044 22 12.0011 22C11.3978 22 10.8182 21.773 10.3845 21.367C6.41302 17.626 1.09076 13.4469 3.68627 7.37966C5.08963 4.09916 8.45834 2 12.0011 2C15.5439 2 18.9126 4.09916 20.316 7.37966C22.9082 13.4393 17.599 17.6389 13.6177 21.367Z" />
      <path d="M15.5 11C15.5 12.933 13.933 14.5 12 14.5C10.067 14.5 8.5 12.933 8.5 11C8.5 9.067 10.067 7.5 12 7.5C13.933 7.5 15.5 9.067 15.5 11Z" />
    </Icon>
  );
}

export function AnalyticsUpIcon({ strokeWidth = 1.5, ...props }: IconProps) {
  return (
    <Icon strokeWidth={strokeWidth} {...props}>
      <path
        d="M7 18V16M12 18V15M17 18V13M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.99219 11.4863C8.14729 11.5581 13.0341 11.2328 15.8137 6.82132M13.9923 6.28835L15.8678 5.98649C16.0964 5.95738 16.432 6.13785 16.5145 6.35298L17.0104 7.99142"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
}

export function CloudIcon({ strokeWidth = 1.5, ...props }: IconProps) {
  return (
    <Icon strokeWidth={strokeWidth} {...props}>
      <path
        d="M17.4776 10.0001C17.485 10 17.4925 10 17.5 10C19.9853 10 22 12.0147 22 14.5C22 16.9853 19.9853 19 17.5 19H7C4.23858 19 2 16.7614 2 14C2 11.4003 3.98398 9.26407 6.52042 9.0227M17.4776 10.0001C17.4924 9.83536 17.5 9.66856 17.5 9.5C17.5 6.46243 15.0376 4 12 4C9.12324 4 6.76233 6.20862 6.52042 9.0227M17.4776 10.0001C17.3753 11.1345 16.9286 12.1696 16.2428 13M6.52042 9.0227C6.67826 9.00768 6.83823 9 7 9C8.12582 9 9.16474 9.37209 10.0005 10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
}

export function ArrowRight01Icon({ strokeWidth = 1.5, ...props }: IconProps) {
  return (
    <Icon strokeWidth={strokeWidth} {...props}>
      <path
        d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
}

export function PlugSocketIcon({ strokeWidth = 1.5, ...props }: IconProps) {
  return (
    <Icon strokeWidth={strokeWidth} {...props}>
      <path d="M17.854 12.16C17.471 12.6105 16.7631 12.6138 16.3165 12.1671L11.8329 7.68351C11.3862 7.23686 11.3895 6.529 11.84 6.14596L13.071 5.09939C13.9559 4.34704 15.0349 3.84824 16.2044 3.6509L16.9294 3.52858C17.614 3.41306 18.3339 3.65221 18.8475 4.16577L19.8342 5.15255C20.3478 5.66611 20.5869 6.38601 20.4714 7.07063L20.3491 7.79559C20.1518 8.9651 19.653 10.0441 18.9006 10.929L17.854 12.16Z" />
      <path d="M19.5 4.5L21.5 2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M2.5 21.5L4.5 19.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6.14596 11.84C6.52901 11.3895 7.23686 11.3862 7.68351 11.8329L12.1671 16.3165C12.6138 16.7631 12.6105 17.471 12.16 17.854L10.929 18.9006C10.0441 19.653 8.9651 20.1518 7.79559 20.3491L7.07063 20.4714C6.38601 20.5869 5.66611 20.3478 5.15255 19.8342L4.16577 18.8475C3.65221 18.3339 3.41306 17.614 3.52858 16.9294L3.6509 16.2044C3.84824 15.0349 4.34704 13.9559 5.09939 13.071L6.14596 11.84Z" />
      <path
        d="M8.5 12.5L10.5 10.5M11.5 15.5L13.5 13.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
}

export function CpuIcon({ strokeWidth = 1.5, ...props }: IconProps) {
  return (
    <Icon strokeWidth={strokeWidth} {...props}>
      <path
        d="M4 12C4 8.22876 4 6.34315 5.17157 5.17157C6.34315 4 8.22876 4 12 4C15.7712 4 17.6569 4 18.8284 5.17157C20 6.34315 20 8.22876 20 12C20 15.7712 20 17.6569 18.8284 18.8284C17.6569 20 15.7712 20 12 20C8.22876 20 6.34315 20 5.17157 18.8284C4 17.6569 4 15.7712 4 12Z"
        strokeLinejoin="round"
      />
      <path d="M9.5 2V4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14.5 2V4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9.5 20V22" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14.5 20V22" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M13 9L9 13" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15 13L13 15" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M22 14.5L20 14.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 9.5L2 9.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 14.5L2 14.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M22 9.5L20 9.5" strokeLinecap="round" strokeLinejoin="round" />
    </Icon>
  );
}

export function Calendar01Icon({ strokeWidth = 1.5, ...props }: IconProps) {
  return (
    <Icon strokeWidth={strokeWidth} {...props}>
      <path d="M16 2V6M8 2V6" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M13 4H11C7.22876 4 5.34315 4 4.17157 5.17157C3 6.34315 3 8.22876 3 12V14C3 17.7712 3 19.6569 4.17157 20.8284C5.34315 22 7.22876 22 11 22H13C16.7712 22 18.6569 22 19.8284 20.8284C21 19.6569 21 17.7712 21 14V12C21 8.22876 21 6.34315 19.8284 5.17157C18.6569 4 16.7712 4 13 4Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M3 10H21" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M10 18.5002L9.99999 13.8474C9.99999 13.6557 9.86325 13.5002 9.69458 13.5002H9M14 18.4983L15.4855 13.8923C15.4951 13.8626 15.5 13.8315 15.5 13.8002C15.5 13.6346 15.3657 13.5002 15.2 13.5002L13 13.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
}

export function AiBrain01Icon({ strokeWidth = 1.5, ...props }: IconProps) {
  return (
    <Icon strokeWidth={strokeWidth} {...props}>
      <path
        d="M7 4.5C5.34315 4.5 4 5.84315 4 7.5C4 8.06866 4.15822 8.60037 4.43304 9.0535C3.04727 9.31855 2 10.537 2 12C2 13.463 3.04727 14.6814 4.43304 14.9465M7 4.5C7 3.11929 8.11929 2 9.5 2C10.8807 2 12 3.11929 12 4.5V19.5C12 20.8807 10.8807 22 9.5 22C8.11929 22 7 20.8807 7 19.5C5.34315 19.5 4 18.1569 4 16.5C4 15.9313 4.15822 15.3996 4.43304 14.9465M7 4.5C7 5.31791 7.39278 6.04408 8 6.50018M4.43304 14.9465C4.78948 14.3588 5.34207 13.9032 6 13.6707"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17 19.4999C18.6569 19.4999 20 18.1567 20 16.4999C20 15.9312 19.8418 15.3995 19.567 14.9464C20.9527 14.6813 22 13.4629 22 11.9999C22 10.5369 20.9527 9.31843 19.567 9.05338M17 19.4999C17 20.8806 15.8807 21.9999 14.5 21.9999C13.1193 21.9999 12 20.8806 12 19.4999L12 4.49988C12 3.11917 13.1193 1.99988 14.5 1.99988C15.8807 1.99988 17 3.11917 17 4.49988C18.6569 4.49988 20 5.84302 20 7.49988C20 8.06854 19.8418 8.60024 19.567 9.05338M17 19.4999C17 18.682 16.6072 17.9558 16 17.4997M19.567 9.05338C19.2105 9.64109 18.6579 10.0966 18 10.3292"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
}

export function Factory01Icon({ strokeWidth = 1.5, ...props }: IconProps) {
  return (
    <Icon strokeWidth={strokeWidth} {...props}>
      <path
        d="M3 21C4.5 18 5.5 14 5.5 8H12.5C12.5 14 13.5 18 15 21"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 4.26495C13.1704 2.62795 14.6678 2.62795 15.8382 4.26495C16.5439 5.26947 17.4561 5.23227 18.179 4.22775C19.3322 2.59075 20.8296 2.59075 22 4.22775"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.8496 12.0713H16.4036C16.5444 13.9094 16.3899 17.1164 19.6951 20.82"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M2 21H21" strokeLinecap="round" strokeLinejoin="round" />
    </Icon>
  );
}

export function Leaf01Icon({ strokeWidth = 1.5, ...props }: IconProps) {
  return (
    <Icon strokeWidth={strokeWidth} {...props}>
      <path
        d="M7.64584 15.7108C7.23279 14.8966 7 13.9755 7 13C7 9.78484 9.5 7.5 13 7C17.0817 6.4169 18.8333 4.16667 20 3C23.5 16 17 19 13 19C11.9071 19 10.8825 18.7078 10 18.1973"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 21C3.5 18 5.45791 16.1355 10 15C13.2167 14.1958 15.4634 12.1791 17 10.0549"
        strokeLinecap="round"
      />
    </Icon>
  );
}

export function FileEditIcon({ strokeWidth = 1.5, ...props }: IconProps) {
  return (
    <Icon strokeWidth={strokeWidth} {...props}>
      <path
        d="M13 20.8268V22H14.1734C14.5827 22 14.7874 22 14.9715 21.9238C15.1555 21.8475 15.3003 21.7028 15.5897 21.4134L20.4133 16.5894C20.6864 16.3164 20.8229 16.1799 20.8959 16.0327C21.0347 15.7525 21.0347 15.4236 20.8959 15.1434C20.8229 14.9961 20.6864 14.8596 20.4133 14.5866C20.1403 14.3136 20.0038 14.1771 19.8565 14.1041C19.5763 13.9653 19.2473 13.9653 18.9671 14.1041C18.8198 14.1771 18.6833 14.3136 18.4103 14.5866L18.4103 14.5866L13.5867 19.4106C13.2972 19.7 13.1525 19.8447 13.0762 20.0287C13 20.2128 13 20.4174 13 20.8268Z"
        strokeLinejoin="round"
      />
      <path
        d="M19 11C19 11 19 9.4306 18.8478 9.06306C18.6955 8.69552 18.4065 8.40649 17.8284 7.82843L13.0919 3.09188C12.593 2.593 12.3436 2.34355 12.0345 2.19575C11.9702 2.165 11.9044 2.13772 11.8372 2.11401C11.5141 2 11.1614 2 10.4558 2C7.21082 2 5.58831 2 4.48933 2.88607C4.26731 3.06508 4.06508 3.26731 3.88607 3.48933C3 4.58831 3 6.21082 3 9.45584V14C3 17.7712 3 19.6569 4.17157 20.8284C5.23467 21.8915 6.8857 21.99 10 21.9991M12 2.5V3C12 5.82843 12 7.24264 12.8787 8.12132C13.7574 9 15.1716 9 18 9H18.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
}

export function Agreement01Icon({ strokeWidth = 1.5, ...props }: IconProps) {
  return (
    <Icon strokeWidth={strokeWidth} {...props}>
      <path
        d="M2 7H4.86503C5.59174 7 6.28868 6.64031 6.80255 6.00005C7.53643 5.08565 8.62195 4.76636 9.60655 5.17529L11 5.75402M2 15.9668H3.62068C4.78017 15.9668 5.35991 15.9668 5.90812 16.1213C5.93477 16.1288 5.96134 16.1366 5.98782 16.1446C6.53259 16.3101 7.01496 16.6209 7.97971 17.2427C9.86787 18.4596 10.812 19.0681 11.8407 18.994C11.8892 18.9905 11.9376 18.9858 11.9859 18.9801C13.0096 18.8577 13.8119 18.0821 15.4166 16.5308L17 15"
        strokeLinecap="round"
      />
      <path
        d="M22 7.23384H19.4832C18.4174 7.23384 17.6649 6.65468 16.9003 5.88258C16.4051 5.38247 15.7731 5.08772 15.1088 5.04713C14.366 5.00175 13.5053 4.93785 12.784 5.13601C11.9811 5.35656 11.451 5.96063 10.8902 6.59196L9.44309 8.22111C8.8523 8.88621 8.8523 9.96455 9.44309 10.6297C9.953 11.2037 10.7519 11.2928 11.3519 10.8424C11.7837 10.5184 12.2743 9.99506 12.7831 9.83025C13.3557 9.64476 13.7109 10.0615 14.0354 10.4999L16.3556 13.6344C17.2167 14.7976 17.6472 15.3793 18.2358 15.6896C18.8244 16 19.4969 16 20.842 16H22"
        strokeLinecap="round"
      />
    </Icon>
  );
}

export function Rocket01Icon({ strokeWidth = 1.5, ...props }: IconProps) {
  return (
    <Icon strokeWidth={strokeWidth} {...props}>
      <path
        d="M11.8013 6.48949L13.2869 5.00392C14.9596 3.3312 17.1495 2.63737 19.4671 2.52399C20.3686 2.47989 20.8193 2.45784 21.1807 2.81928C21.5422 3.18071 21.5201 3.63143 21.476 4.53289C21.3626 6.8505 20.6688 9.04042 18.9961 10.7131L17.5105 12.1987C16.2871 13.4221 15.9393 13.77 16.1961 15.097C16.4496 16.1107 16.6949 17.0923 15.9578 17.8294C15.0637 18.7235 14.2481 18.7235 13.354 17.8294L6.17058 10.646C5.27649 9.75188 5.27646 8.9363 6.17058 8.04219C6.90767 7.30509 7.88929 7.55044 8.90297 7.80389C10.23 8.06073 10.5779 7.71289 11.8013 6.48949Z"
        strokeLinejoin="round"
      />
      <path d="M2.5 21.5L7.5 16.5" strokeLinecap="round" />
      <path d="M8.5 21.5L10.5 19.5" strokeLinecap="round" />
      <path d="M2.5 15.5L4.5 13.5" strokeLinecap="round" />
      <path
        d="M17.125 7H17M17.25 7C17.25 7.13807 17.1381 7.25 17 7.25C16.8619 7.25 16.75 7.13807 16.75 7C16.75 6.86193 16.8619 6.75 17 6.75C17.1381 6.75 17.25 6.86193 17.25 7Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
}

export function ArrowLeft01Icon({ strokeWidth = 1.5, ...props }: IconProps) {
  return (
    <Icon strokeWidth={strokeWidth} {...props}>
      <path
        d="M15 6C15 6 9.00001 10.4189 9 12C8.99999 13.5812 15 18 15 18"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
}

export function HardDriveIcon({ strokeWidth = 1.5, ...props }: IconProps) {
  return (
    <Icon strokeWidth={strokeWidth} {...props}>
      <path
        d="M20.7104 8.70122L21.9186 12.7288C21.9578 12.8592 21.9773 12.9244 21.9879 12.9914L21.9908 13.0118C22 13.079 22 13.147 22 13.2831C22 16.7797 22 18.528 20.9812 19.6669C20.8824 19.7774 20.7774 19.8824 20.6669 19.9812C19.528 21 17.7797 21 14.2831 21H9.71685C6.22026 21 4.47197 21 3.33311 19.9812C3.22259 19.8824 3.11765 19.7774 3.01877 19.6669C2 18.528 2 16.7797 2 13.2831C2 13.147 2 13.079 2.00915 13.0118L2.01215 12.9914C2.02269 12.9244 2.04225 12.8592 2.08136 12.7288L3.28963 8.70122C4.11355 5.95484 4.5255 4.58166 5.5884 3.79083C6.6513 3 8.08495 3 10.9522 3H13.0478C15.9151 3 17.3487 3 18.4116 3.79083C19.4745 4.58166 19.8865 5.95484 20.7104 8.70122Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M2 13H22" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M18.125 17H18M14.125 17H14M18.25 17C18.25 17.1381 18.1381 17.25 18 17.25C17.8619 17.25 17.75 17.1381 17.75 17C17.75 16.8619 17.8619 16.75 18 16.75C18.1381 16.75 18.25 16.8619 18.25 17ZM14.25 17C14.25 17.1381 14.1381 17.25 14 17.25C13.8619 17.25 13.75 17.1381 13.75 17C13.75 16.8619 13.8619 16.75 14 16.75C14.1381 16.75 14.25 16.8619 14.25 17Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
}

export function Activity01Icon({ strokeWidth = 1.5, ...props }: IconProps) {
  return (
    <Icon strokeWidth={strokeWidth} {...props}>
      <path
        d="M4.31802 19.682C3 18.364 3 16.2426 3 12C3 7.75736 3 5.63604 4.31802 4.31802C5.63604 3 7.75736 3 12 3C16.2426 3 18.364 3 19.682 4.31802C21 5.63604 21 7.75736 21 12C21 16.2426 21 18.364 19.682 19.682C18.364 21 16.2426 21 12 21C7.75736 21 5.63604 21 4.31802 19.682Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 14L9.79289 11.2071C10.1834 10.8166 10.8166 10.8166 11.2071 11.2071L12.7929 12.7929C13.1834 13.1834 13.8166 13.1834 14.2071 12.7929L17 10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
}

export function Linkedin01Icon({ strokeWidth = 1.5, ...props }: IconProps) {
  return (
    <Icon strokeWidth={strokeWidth} {...props}>
      <path d="M7 10V17" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M11 13V17M11 13C11 11.3431 12.3431 10 14 10C15.6569 10 17 11.3431 17 13V17M11 13V10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.125 6.75H7M7.25 6.75C7.25 6.88807 7.13807 7 7 7C6.86193 7 6.75 6.88807 6.75 6.75C6.75 6.61193 6.86193 6.5 7 6.5C7.13807 6.5 7.25 6.61193 7.25 6.75Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 12C3 7.75736 3 5.63604 4.31802 4.31802C5.63604 3 7.75736 3 12 3C16.2426 3 18.364 3 19.682 4.31802C21 5.63604 21 7.75736 21 12C21 16.2426 21 18.364 19.682 19.682C18.364 21 16.2426 21 12 21C7.75736 21 5.63604 21 4.31802 19.682C3 18.364 3 16.2426 3 12Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
}

export function GithubIcon({ strokeWidth = 1.5, ...props }: IconProps) {
  return (
    <Icon strokeWidth={strokeWidth} {...props}>
      <path
        d="M10 20.5675C6.57143 21.7248 3.71429 20.5675 2 17"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 22V18.7579C10 18.1596 10.1839 17.6396 10.4804 17.1699C10.6838 16.8476 10.5445 16.3904 10.1771 16.2894C7.13394 15.4528 5 14.1077 5 9.64606C5 8.48611 5.38005 7.39556 6.04811 6.4464C6.21437 6.21018 6.29749 6.09208 6.31748 5.9851C6.33746 5.87813 6.30272 5.73852 6.23322 5.45932C5.95038 4.32292 5.96871 3.11619 6.39322 2.02823C6.39322 2.02823 7.27042 1.74242 9.26698 2.98969C9.72282 3.27447 9.95075 3.41686 10.1515 3.44871C10.3522 3.48056 10.6206 3.41384 11.1573 3.28041C11.8913 3.09795 12.6476 3 13.5 3C14.3524 3 15.1087 3.09795 15.8427 3.28041C16.3794 3.41384 16.6478 3.48056 16.8485 3.44871C17.0493 3.41686 17.2772 3.27447 17.733 2.98969C19.7296 1.74242 20.6068 2.02823 20.6068 2.02823C21.0313 3.11619 21.0496 4.32292 20.7668 5.45932C20.6973 5.73852 20.6625 5.87813 20.6825 5.9851C20.7025 6.09207 20.7856 6.21019 20.9519 6.4464C21.6199 7.39556 22 8.48611 22 9.64606C22 14.1077 19.8661 15.4528 16.8229 16.2894C16.4555 16.3904 16.3162 16.8476 16.5196 17.1699C16.8161 17.6396 17 18.1596 17 18.7579V22"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
}
