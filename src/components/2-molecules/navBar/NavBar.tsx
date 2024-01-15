import { FC } from 'react';
import { Flex, FlexProps } from '@chakra-ui/react';
import { linkInfo } from '@/types/componens';
import NavLink from './components/NavLink';

type Props = {
  links: linkInfo[];
} & FlexProps;

const NavBar: FC<Props> = ({ links, ...props }) => {
  return (
    <Flex as="nav" gap={3} {...props}>
      {links.map((linkInfo) => (
        <NavLink {...linkInfo} key={linkInfo.text} />
      ))}
    </Flex>
  );
};

export default NavBar;
