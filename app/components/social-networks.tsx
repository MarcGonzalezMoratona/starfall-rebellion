import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faYoutube,
  faTiktok,
  faInstagram,
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

type SocialNetworksProps = {
  networks?: {
    twitter?: string;
    instagram?: string;
    youtube?: string;
    tiktok?: string;
    linkedin?: string | undefined;
    github?: string | undefined;
    website?: string | undefined;
  };
  className?: string;
  size: 'sm' | 'md' | 'lg';
};

const SocialNetworks = ({ networks, className, size }: SocialNetworksProps) => {
  return (
    <div
      className={`flex items-center h-full gap-2 text-3xl sm:gap-4 lg:gap-8 sm:text-2xl ${className}`}
    >
      {networks?.twitter && (
        <Link
          href={networks.twitter}
          target="_blank"
          aria-label="Take a look at our twitter account"
        >
          <FontAwesomeIcon
            icon={faTwitter}
            className={`text-white hover:text-amber ${
              size === 'sm' && 'w-6 h-6'
            } ${size === 'md' && 'w-8 h-8'} ${size === 'lg' && 'w-12 h-12'}`}
          />
        </Link>
      )}
      {networks?.instagram && (
        <Link
          href={networks.instagram}
          target="_blank"
          aria-label="Take a look at our instagram account"
        >
          <FontAwesomeIcon
            icon={faInstagram}
            className={`text-white hover:text-amber ${
              size === 'sm' && 'w-6 h-6'
            } ${size === 'md' && 'w-8 h-8'} ${size === 'lg' && 'w-12 h-12'}`}
          />
        </Link>
      )}
      {networks?.youtube && (
        <Link
          href={networks.youtube}
          target="_blank"
          aria-label="Take a look at our youtube channel"
        >
          <FontAwesomeIcon
            icon={faYoutube}
            className={`text-white hover:text-amber ${
              size === 'sm' && 'w-6 h-6'
            } ${size === 'md' && 'w-8 h-8'} ${size === 'lg' && 'w-12 h-12'}`}
          />
        </Link>
      )}
      {networks?.tiktok && (
        <Link
          href={networks.tiktok}
          target="_blank"
          aria-label="Take a look at our tiktok account"
        >
          <FontAwesomeIcon
            icon={faTiktok}
            className={`text-white hover:text-amber ${
              size === 'sm' && 'w-6 h-6'
            } ${size === 'md' && 'w-8 h-8'} ${size === 'lg' && 'w-12 h-12'}`}
          />
        </Link>
      )}
      {networks?.linkedin && (
        <Link
          href={networks.linkedin}
          target="_blank"
          aria-label="Take a look at our linkedin account"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            className={`text-white hover:text-amber ${
              size === 'sm' && 'w-6 h-6'
            } ${size === 'md' && 'w-8 h-8'} ${size === 'lg' && 'w-12 h-12'}`}
          />
        </Link>
      )}
      {networks?.github && (
        <Link
          href={networks.github}
          target="_blank"
          aria-label="Take a look at our github account"
        >
          <FontAwesomeIcon
            icon={faGithub}
            className={`text-white hover:text-amber ${
              size === 'sm' && 'w-6 h-6'
            } ${size === 'md' && 'w-8 h-8'} ${size === 'lg' && 'w-12 h-12'}`}
          />
        </Link>
      )}
      {networks?.website && (
        <Link
          href={networks.website}
          target="_blank"
          aria-label="Take a look at our github account"
        >
          <FontAwesomeIcon
            icon={faGlobe}
            className={`text-white hover:text-amber ${
              size === 'sm' && 'w-6 h-6'
            } ${size === 'md' && 'w-8 h-8'} ${size === 'lg' && 'w-12 h-12'}`}
          />
        </Link>
      )}
    </div>
  );
};

export default SocialNetworks;
