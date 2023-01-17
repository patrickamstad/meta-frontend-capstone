import  Logo from './images/logo.webp'
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    IconButton
  } from '@chakra-ui/react'

export default function Nav(props){
    return(
        <nav>
            <div className={`menu container mx-auto items-center ${props.animation}`}>
                <div>
                    <Link to="/">
                        <img src={Logo} alt="Little Lemon Restaurant Logo" width={200}/>
                    </Link>
                </div>
                <div className='hidden md:block'>
                    <ul>
                        <CustomLink to="/about" className="hover:text-gray-600"> About</CustomLink>
                        <CustomLink to="/menu" className="hover:text-gray-600"> Menu</CustomLink>
                        <CustomLink to="/booking" className="hover:text-gray-600"> Booking</CustomLink>
                        <CustomLink to="/order-online" className="hover:text-gray-600"> Order Online</CustomLink>
                        <CustomLink to="/login" className="hover:text-gray-600"> Login</CustomLink>
                    </ul>
                </div>
                <div className='md:hidden pr-3'>
                    <Menu>
                    {({ isOpen }) => (
                    <>
                        <MenuButton
                            as={IconButton}
                            isActive={isOpen}
                            aria-label='Options'
                            icon={isOpen ? <AiOutlineClose size='35px' /> : <AiOutlineMenu size='35px'/> }
                            variant='outline'
                        />
                        <MenuList
                        w="100vw"
                        bgColor="#333333e8"
                        h="40vh"
                        color="#fff"
                        fontSize="23px"
                        p="20px"
                        >
                            <MenuItem justifyContent="center" mb="15px" pt="25px" >
                                <Link to={"/about"}>About</Link>
                            </MenuItem>
                            <MenuItem justifyContent="center" mb="15px">
                                <Link to={"/menu"}>Menu</Link>
                            </MenuItem>
                            <MenuItem justifyContent="center" mb="15px">
                                <Link to={"/booking"}>Booking</Link>
                            </MenuItem>
                            <MenuItem justifyContent="center" mb="15px">
                                <Link to={"/order-online"}>Order Online</Link>
                            </MenuItem>
                            <MenuItem justifyContent="center" >
                                <Link to={"/login"}>Log In</Link>
                            </MenuItem>
                        </MenuList>
                    </>
                    )}
                    </Menu>
                </div>
            </div>
        </nav>
    )
}

function CustomLink({to, children, ...props}){
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({path: resolvedPath.pathname, end:true});

    return(
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
)
}