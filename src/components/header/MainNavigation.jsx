import { NavLink } from 'react-router-dom'

const MainNavigation = () => {

    const links = [
        {
            title: 'Services',
            url: '/services',
            children: [
                { title: 'Cloud', url: '#' },
                { title: 'Security', url: '#' },
                { title: 'Consulting', url: '#' },
            ]
        },
        {
            title: 'Solutions',
            url: '/solutions',
            children: [
                { title: 'Cloud Security', url: '#' },
                { title: 'IT Security', url: '#' },
                { title: 'Penetration Testing', url: '#' },
                { title: 'Security Consulting', url: '#' },
                { title: 'Security Training', url: '#' },
                { title: 'Security Automation', url: '#' },
            ]
        },
        {
            title: 'Contracts',
            url: '/contracts',
            children: [
                { title: 'Cloud Security', url: '#' },
                { title: 'IT Security', url: '#' },
                { title: 'Penetration Testing', url: '#' },
                { title: 'Security Consulting', url: '#' },
                { title: 'Security Training', url: '#' },
                { title: 'Security Automation', url: '#' },
            ]
        },
        {
            title: 'Insight',
            url: '/insight',
            children: [
                { title: 'News', url: '#' },
                { title: 'Resources', url: '#' },
            ]
        },
        {
            title: 'About',
            url: '/about',
            children: [
                { title: 'Careers', url: '#' },
                { title: 'Contact Us', url: '#' },
            ]
        },
    ]

  return (
    <nav id="main-navigation">
        <ul className="menu menu-main d-flex">
            {links.map((link) => (
                <li key={link.title}>
                    <NavLink to={link.url}>
                        {link.title}
                        {link.children && <span className="sub-menu-indicator"></span>}
                    </NavLink>
                    {link.children && (
                        <ul className="sub-menu level-1">
                            {link.children.map((child) => (
                                <li key={child.title}>
                                    <NavLink to={child.url}>{child.title}</NavLink>
                                </li>
                            ))}
                        </ul>
                    )}
                </li>
            ))}
        </ul>
    </nav>
  )
}

export default MainNavigation