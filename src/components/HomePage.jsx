import React from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import Natwest from '../images/Natwest.png'

const HomePage = () => {

  const navigate = useNavigate()

  // Routing to Login page 
  const RouteToLoginPage = () => {
    navigate('/login')
  }

  // Routing to Register page 
  const RouteToSignUpPage = () => {

    navigate('/signup')

  }


  window.history.pushState(null, document.title, window.location.href);
  window.addEventListener('popstate', function (event) {
    window.history.pushState(null, document.title, window.location.href);
  });


  return (
    <div className='container-fluid'>
      {/*  NavBar Starts here */}
      <Navbar collapseOnSelect expand="lg" bg="light" variant="purple">
        <Container>
          <Navbar.Brand>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABR1BMVEVVHm9WH3BWH3JVHnHlJDXXIilUHmxUHW7///////3///xWIG5RH3NGAGZKIHR+IGPtJDB+IF/eIyJxK2nDss2HLFfdIT16K2J1K2aCLF2NLFKILFV9Kl53LGSVLEuOLFHQJEBRFGzJt82HZJeULE2dLUaiLEJPCW3v6e1vKmt5K1+DK1iZLUmiLUCnLT7YIieqLTro4uqkjbN9WJDjJTjSIy3UJjnhIR7CITedIEjIJTCuLTVkH2hxIGd5KGlpLWtsQIGWdaLRx9lAAF1yTouumbmchKxTHnnhIzrHI0OrIUiiIVVIIXC6IkqMI11GIXqTIFOQIFZkLHWqJUbMIka1JT/FKClmHWy6LDF9MFqqI1WmJ0ivKzy5JzjxIyp4IGthMndRAnK6pchjO3lZLnjk1+aIX5fTytK9sMP78f3p2u+ijKeGaJHculYaAAAZoElEQVR4nO2d+V/ayP/Hc0gCJKGKWm9tvABRARHvCgpI222rtZ9+9mi7X3vw/a67+////H2/ZxIIkGQm4dDuY+fR3ZZrMk9e73kfMwkRlM6mkiYEbHJHk8TBts7+AwyLsrgSBkXs4JMGTSiKIQkFFf/8owlRxk5CVVaDIzoPP3A22qTOaRAIsUtDOYSEDvmGRgjtcRBKwvAIpXCEQgdhiEnoxBsOXbuFNNRBEQ7DwXS1kIbqQhjKzYyCMJyhdjvSAB8dqYmGh+x2M6EIRyCgRRjCUHsc6eMm7EfDoHNw9CYaErKLkBvQmcr8S/goCNVgk/ChTJS2cBqGJByZj3E26R9OKAgtQw1AGMiRhjNRiaPx9xbAUEO4mXACDpYwgKH+kISBDNXhSAMTDpAtBCevoYYofIOGwcdDyAloE3IPZSiEDlNiE4ZzpMNgC8jJB/kjE/IZatDSvjUJBY5Vp8dFGEhA5iTsh40fkisLD6Thj0woBCNkHv4xEQZZgAojoCYlWO21rofmVDg0HDJh4/mLp37tAP57dvYjEyZejrHafvJVYniElpMJMgkD4EmSPjHOJIxEDp/rWjgZ2Sl4iFDhHwi7Bie8YAICYe6oIYQk5NUwCKEagDDxE1vCUiQSSb4N6Ww4CXkAuSZht4mKIhsQJIRWei15xxjfr1SEcOAHOVRC6fUb8CM8gLnccaIRklDzl3GwjrRbw+ccbiaXo4iat5368QmC5u9sgmooevuZrmFpopQ4YODtWxIi4hufiNGPOw2qIb+Akqi+HWeZaAsQnM3zsM7moQh1UR9jh4o2YeTIT8S+CPnxAk1CLfEbzyxsEx6+1X1Tdp9DK4I35PAI5TOebKZNCB5Hl30A/Q7t506HR5h4wwQccygIiMnj65AaMgj5K0N+PE3Un7ABI10tdyb7qugJ6ToVLS5OTxPckSaeBXGkFuHna1/AgITD1TBxwwGY6yaMTPhFjICEnaAceMFCxdlT9iTsBoyUkie6d+7mQ9haO+2TMIib4YgUPYCRXCl5EzKzGQhhAEeqc0SKnllIzLSkhSuFh0zYNQ5NT7wM7mYsxjdhnY1XwBgGoa4++T0kIKanIQPGAAi952H3KBoHHGVh7zSkdnrkL6L3GLwIuUOFV9nUOwj95vcwk9AWcUIP505pqa+E15BXQEnmXrpwV7HU0HwM1ZtQcCfkacEI5cQblpvZd4kUDsTj65ESMsN9j41yLF34SAitdOazKuUJKXgHjEETPusTMJJ8c+0XFD1l7JvQw9V0HT7xLlhZ6GKlEDEagyNkepqgwfDnp2M0VIyPj1FWJ/E4PDs2Dt7EV8TcSyWMO3Xfwxg44dnu5ga27Zubm/n5hYWFd29Jm5iYm6Ht/KdkyU9DbH4Seo7EvQ4eOKG+uLmxvb28vrKCfNPZbHZxcXFra2t2dmlycrJcLmfK5ZOkv4bJd40Q2amgiW6EzOZP6HJ8bXlzGxCBcR4YEXFubnFxZmZpaXYWGDOTmcxb33kYiZwMKK0ZxGJ+7+F1/XxnBxHXqYw24hZBJIyZ2yM/vlLyfEB1cMDTSzgJRUlfhploI4KhTtuIM0uzS4g4mZn19aUfBrWWEWgx37PT3iaf7RJXQxjpZJyzEYmlZiZv3/cW+G1Cvz1vf8hQaU1wQkmfzhMVHYi2oc7QyThZ9gyJueSx70LGoyAUz3Z2qKE6XCp1N0TGc5iKN17uNFfS5dCEYnhC/tIJW2Muv7nTIeM0tdQt4m8mQcbykbuGJf/dYKtpvhqGihaBNJS0xM7pzmaHjNOOyUhc6mLSXULf/ZlHQyjq5592exGzTn9T/uAqov8e2+AJ7Ujh3qPPEPSN/O4OZVymwd+ejMRQEXHWzZ0m3/tuXbS/Q48WllAOTCjfnuZ3O2V0uFRknMy86rHTXCTnV94PkVAMTCg15k/zeUK40RM1ZkDGWUhUD3pEPLzRJd/ScECE7VSAP6Fp6N2n4+2e7gLizoaVpLZVtFO4yfluEXMnekOWG3q7eWXgHoCCMjRC/fmzjnYAf/Zf7L94+gL+0FP0XnycX3Ek4iDjZHfESK5vZacX5udX1teXl7c3NjY3dz3yGy9CjYtQ7SFkp93X/+lcfdrHh1bpa/21X15cWelIxM/nOkXMHWUX5ldW1pe3lxEunz89Tb53Dx6eGqohfSmLMPGWuXQxfnObmV+wSkZgRBUnnRGjFEmuTCOhLd/up/x/cQnczVA9CK3ke/CEYoO5iD/2rJy5XWxVxYiIMjoIc8nPc1m00OXtbQDc2c1/OgXDPXINH4MmZM3D62O2hItnkI3OU8RpYqhoqcdtO82VFugU3EYJd4Dw9ATCR/KtG+JINRR1+WcW3/74m9sMtNnt5XlHPTUzM3uSswN/7v0cEK5TCQHwNP8LvpI70IIQhs1pfAnFa/ZZF/sgYAYqw4XlzpLxfN5elcqdTE8TG8VZiArmT+kryZ9cnM1oCRvn46ydpvGPVMLM0vLyigNxbmb2s1VGJY9/nW+5mZ1dmIW/2JP0rDfPGamVSq+Zi9z7T8sZsgg1OTm9bNdT1N9sZSlH8mgOpqFTws+tROdDoucc6ZESJm5YbubF+Ds0UWiQcLezVJrDzb5PkowUI8U8TkI6C/P5k5afddk0HSmh9pRBuD/+rEw0nJyFmiLbjTiHVpr7kCWOlALuOiUEf3rSMxMHTOjVIzlU4jf2XtqErSDWTcuOTBxn4+xHELG0AG5mft2ehfnTfMlRXB2+e/1ghGKDfdbF+KuMg3Bma9OxfgOI2aWjZPJjdrrDzUCkcKY7uW4zHZ2VavpL5pb9/kyZIiIhJGsrG51LVNmb5MncNE1IrWwGJXQmrMnjxFAJvS4/kGSpwbxgZH/8+Ja4GOSD4he85/bmRscS1dbn5WnLj6IjRQlPuuqqwzNlmIQ+C20J1sldL8YPylQ/YqJACJnM+fn5FtmGgtQNwuJclrqZ5W1rFuZPuwAjuZedm6YjI9SZkWJs/F25PQdntgBpMVMuk9iIRrsFiFkrm2kBgoTd5X/yiT5EQq95qGs6i29s7GV50qEhajbpnJWoIVS9YKTL1M8AYDubcYh40HGK9IgIpddv2PnaecYGnFkiEi5lLEICuGgDOm3UbTkc0lPHeTYjIlSZNQVGipaNbiHg4hxE/wy10ZktsNFsByAhdJEQAkZEkUZMKAgJjrMuMjjjZumUA6DF7GSmZaREUupm1qkjBcBPvW7GstNXCal1kvRoNNTfMiPh+E3ZYaLoVbYyjlnodDOtYH/aHSladvq8fS6/J+EAqydNvN5nXjDyDPLRWepSKM/cbNkxC2fmiJHa2Yw1C712Fp1bGoMm7FnFINkM+9LC8bdAc05NFLwKJKEzDsAtS8KFBbJ6uEHX1/KeJzGU8JKTUVkpHEM4Y09CjBRWmNgCt7k1N5fJ0Eg4S2Kj5Uedq0/5X7wAkVEf2TyEfjguGBmfzZQnqRel2Ut2lvrRVihEBedpWWglpKc+p9rkcq1LTgZN2LMzo2nqOfvkrlfldjJD8zMrTrRDIVnixtUna4V098T3PJTczwzCsCvCPYSSdv2MSbifmbTdjCXh0llnNpO11vDRz9DC/tT/TJvWJSdehHyr+jwaXr9jZzM3aKI2INTy2TlHpMBQaAV7Z1l44n/GWy5npaeeGgohCZWuAkrW2FcWPivTimmpFdkzt+UyJt0ZqKUgfKCuWXCky7aROpYuvAgjdEHDaw84/A6p0tVRY+mQMZZI7n1msl0xkRKpY3PKbta/nr44OHhxwDqjL1c61IRhEArdhNr1h5xvw9HMOSom4Mv++obv2nxfKz3WfTQMd5ow/Ux3X4mznPu5FI7RvCxTE92iVS44FdaFz4joz1jS/TzNAAl17fo4ybCoUnK+baIk8mXfswn9+zx8ovr60sERapKgMQwKJ82kbaIICBpOc4jo2+PL1/KICCF1UCdYZhrJfZzdmrEWYkjysnA8zrweyq/D5POE5h8PB0cIITLhcd6WE7HlZaz0c76v8/hz76+1xnA07LklAKZ/ynO2iB+WFq05iICQnm2zN4t9EM8kRubdh5W6lReJN2wR5xd/pSa6QPPP9Q88hO79tjYSvUw02C+3chDKGuOEdCxat2huhhKS/HM5vIgnur+AAyeU5dc3TDs93P6VCrhCATe23/NccOIq4YTOcDPuhP1cjaDpJcZJ9xAVs3YNuL5MV+0PmPsArojJ9nWJnoSuAvZDqCsT7PT0w69tE8W1mI18ODtNnuksQncT7U/DxGe2P53vANzc3DgKQ5h7xV6GCjMJBe/FKGyCfMYmPCKrhet0A5sUumOcP63k6CRS0hh4IUOFg9B1f0ZIHLPsFMqBBYeEALj58XdmddnVR+nwne6bcw+E0GUXEV49Y6ankZNOwE8riQP2xnhnF8mT1qaFN2BYQsGrgCJNu2ZHjORuy0Q3d6GdJSbYM3G/0w4mONcRB08oyokTJmKkBbizkz+dTojX7N9S7LhSGBegQhP2+cMmmqRP+FzgYw+QrtnjYtOnXV1qCOxNq47fBclBpAhPyK2ha8CAQyY+sO10w9qV2M3ncbFMu34V4Cek8LeH2lvcD0Co/8xMwCMnyzbgJil/RI7NY9vZ5HIlnWf3Vx4SIRSK16/YiJ+IG93Nn5bp2TmJt/wRw7EhE4owyDV6rqcs6NJrxoXLGNCs8w3X7dSL75p2smZ31AhvokLA3/py7V0T9bfsMuozsdFTzb7yTv8f3ovandcJPQyhrqkN//0UJIxs7uZ3f5lrn1DB82Nn5JNvErzb9wMgdD+GLMjsBY3ICYTCDcdYdY2dnY7h7ypp3KdgDI2QLoEzET/vni466oNG4jceEZM/OX/XNCQhf9D3OoauaexC8eR0w3mNDySSLG+6j0vgCf4ThQZA6HnqkJz46TDp33LJ/545ToiRyGUozHY4wS4LRZ9QIQT8zT3v0zBlfeLJBKOdd52t3RAmnrDaOYeAIyGEuK+/1n2brOtax0XasiYxPoLXrunsUCH63wYi6K/sMr7LoTXfg3rj8WvIlPFfwocl5PpZfa5fTxwSpP8ROX7Pe3C/WP4v4VAIGTeACHG3rhET+h+OvYgYgjDQ3R+GTiioXISBDDXI3R+GT8jUcBh3YRkgJ4vOsSTPIBzELyo9ACHPrdfC3A2J46ZroyLkuDFZ2BtYjkJGjkOw8MITjmQqsg/BFFAIfXfAR0IYSMOAzkYmdwcU/IdCrgDh+8EZfjYcg/UGNl5fhGKL0Oc3llqEwTh9lRNsC+LbMAxmpSkDmunQkD7hQ5gyTDJmg7zRAjDJI+uB7HzAQUi6DEbI7WtU42u6UEivmS0hU1f0CbdEjpDc7TWLwCWazQK0CkU0i/Dv9JRBdJVlfOkyJfPgaTLpsmbimWg8bqaTkIWoCsZUNBaLFRyEe/BEdM1VREk21y6j0SgSSsYlvvEiRRDgU/FYPE0JzW/4yqXBJaBmrjWjsSgQ8t9D3knIQFRVIMRWNxyEUU9CyViNw6tIqH2p4we/Ug7jMo5UdybR+W/S5Rf2si8SGqvReDRaU7nu7egg5DVTYyoGo4nFaiadAqgGNG9CHE4RXgXDhPfFmwY6V82I4fPRPUL1pQ6w+DX4gHUQQquZAe9aze1sKCGMtEoRuQnBKYCasXsTDdOsEUsAyxSJoPBCVOC7BXaLkFfAsIQwodrzsE0oyCY0O2sFJ9ki1ESjgBZbAUQtRSw2CvMZgw2+EC8Ymtbqoqs6w6fsPpXQhJw1lEUYjaVvzdY8REKBOvG74traWiVlkHWFlFGdQqoaiRPVVfzoBXxMMC5pJ9EaOB75DsVdNTCogqNMfSsW7wxDpWFdEPSUIVeKxYqGoQZer07F4laXKud5JR2ELESbMBqbMroI9e9Xl/d04OmpCrxqrBaaaSCMY5goXBn4zthX/JiSpp1E94DQXKP/kmXNNIqr5KXC11tTI4mL+mXtkjx1X5haM1NT2CV6cwgw6QszECHfDeTbhLGi2UloXkTjceqHAGvPwPkVi0NDM46B+y3GyASWZeJ0iLGvVnEm4+sYYk1zFScAdBOPpdcwlIgCGGWMdgB9V0D8OALC/4mj4vudUltDrogBhHC4r1FUhpii0SJM/Y0jidMRoCgYEui3gZh7Ke0e0KOGLhp1eCqNASMNXBiAYve3qmJ+L0TJ14FMEDoNTbBmHX5T2GkNgyo1E2xXqXCELA2h91QBvX0dEduE5t/Wga0BVKqXRM5o3AqhRhM/e2eKVXSeqySQgiEYTXjLn4bQgNfjUWoFcez/zlTAgmOkgzQ+Ga1Bl6Q7+kVcmeKwCOHAcRKwOwgvopf1v2vfKsUpcvy6cVHfa+JQv/5Vr9eLpvEH5DHgalQTZmd0r4jawPT7Au+IrxoyKIuvTxXvanWCcWkIVMJm8bv2be1rGhzTxd5ek3xfe3t79VpQwpaz8YGkhBjnYHiX1fY8lGTlTqqm0K2b1TUcYdMwU1WagBipVMoUUhf41ilDLaIR1sx7+JYuDfWOOhrllkh9UYVwYxTJd1QzjQI+J6VwjhrViwq8ViV5o9UlX+slZGoomiqOHN2DTUgcK7g+jIemgQMsEHfajvgqxPkYKkNC6L2Jjih2b5gXtIPUFf69aqAL1YyvlmETwjUy4xXJVCUNZyYS4gF5VyXagKqtofdHLULVwPFA6qxUW4TAYBhf7irQbtG/p1MdhBC3SZBIy8QDrRo0Z69QmDsVMxuYvOQbUk0UNtY0rMB5ZRg0souSQnN/SsiJ6NDQzk49P6lSQk1Vq804MTk7p8HAIdWbtq/BnADKISchpCNkClWMOPGDNGbU0XlEmynZSGNMqNRoq2BHaRMMm3iadP27YSpY0QvGH9g5IeSU0IXQ+6tpESpqhXDUjBahcXFP46EXoUYLk4sKOtFvJkiKRlstEOMUNEIYdbTY/Xc51STTAXznasVQCWE7axsuoWZgbgkB3CY0rjAytMfoQkhcTfzrHslIae4WS3/Hj/z1Rb2zImG7QbwAD4PVYIxEhynTHBgh20oV+GcBI8bVVYzMQxM1jeFg4jQi9hKKuoaB4fKSiAbAJCISB1M09Tsa6EjCQHIhDEeYUlzRPAAo09/M4IQA40boheggFMz/xZGkLQ2/XJJvvV65gyalXQmlKqapafQ3FyZU6xXMCEjFAeMlWkbTzvanQuqz1MWftJyMFVID09AL0amhSoZP8sXoWopMqmjRIB82CEkPoUjzOHzjrYqeB9NLnGYFA2IJZu1xQyb1F21k10wRoEYpklwmDv4psKfp0pBlqE4NBUVM29NmzaxYWQgWBJrRraFgFcR1mlUCkmytZZDHUwY8aNIgr1pDV1VdkRWR/rq3adwV8Jv5P4Nkqpjtca/RexFyaIhJSrxFiCMlhLLS6CG0Sn5aKFlIkpUtRGkRReMiRnyyTiNIJmQgspkiS8qymiK+u2lYuTgQ8gL2QagIVZJLE8LvxH1qaDxG6rLTl67B9DHxhg7ynVUaXODqm2zWrHIal6qslQ3I2nAVjeRo8KmLNSNFq7ROwjXQkAtS7SX0NVTVzmnQSmEclahNSKJ5rFBLmbdX6Xa0wBo/1rwz1RqZObhgQcMACiWn7qkNfMeHJHjEo6s1NZXSavUm5DciCNus13DRuYJhE+tnOg+bFVOpwX8cgD6E3hrahLJRt62UWCy8hp4ybhNSOwS/D0/WcWHHICsZuOJGTLFKqz/yUDNv0WnhMmrhHh0YEGJ+iqUTVPTUWIqmQk07hvUUR/UUhjDqJJTNgkUoV5sIiNHMch9IaJL8hbhBXKawZl5sitbvAs22sXRC/5Rasyv8eJwSinRy0pIxikmiopi0BsG3gGcNSehVZMikIIdorLXMA2dPzFqDuLTK11j0EtdSCugksJwnY8RKEFfzEQDLSQG3kEhEjNGXcPuiVojSFQKs6aN3OhKS4p58edE/DFWQaR1JFL1irmKoDMJuRCT8eg9NskORIlen0vAEzbz3CsRA0/Vq8/4+/ScJWdbCIabaEriQ7wX8/Hdrm0Mxm/hwzSIUTfOvpqXZ/VQN44ZyQVa3kKj5NwRbOjXuo1aNr3EAuhK2VqU6GbFgUTRN0XT7GXgrRgKNxGY1Zdau9q7A65h4w1viVyEHuVvbgycrpgAuUlQkDV5T6L6VKEFmA80kQU+WNU1IGZW/oY8LKH7Jxxupqla82KvvXXyrmiolVIzbC+zymyr7E6rehD5TsfdpxxNQ/0KVrzr2GMlcTWGCYu/4YXMs9nY+xIhikk6cnzexnncW9NAl9skjIIuQN6x2N7mngUj+Z1LZhFLvZ8ONgZcwHGTvKGWOE1ScJ8f0S9jOsD0I/Qy1L07c7NYcjW4Cy879zr7VcyICyIgJkaV9kg+9N5fH+/ohVB+UMEALT6jyE/ZJGRa1zyO28PgI+wUcPaEakPCH01DlI1T6jhlBUQdzjE4T5SQcFOBICDsFfDBCRVG6/jEoQjEQYRsy1B3ZH6aFJPxhENtmF5RwYIY65BacUAntUR/gW7FyNTq9QxAGNdQHkN1WT3WOn5/w0VsqwnXYJy+hMoTQP/iGg8PA0y/ho20qXjii9k/4eCFV28eEJHz0MroEidCEjxFRHSzhI0R0TKI+CB+zjD54/whCXwFDEj4qRH8TDUbYIeNjwHSwdeWiAyB8JEI61HMXsB/CR6Aiyz7DEHZCPrCQPHj9Ez4YItPB/EvIzfngfMyh9kv4EIzqiAkfarFiyITKwzhVciRyPCwFvaP8EAhHA+iQjxS7XOP8gQk5x/n/Q+6EbFydfOQAAAAASUVORK5CYII="
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>

          <Navbar.Brand> Natwest Online Banking</Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-5 me-auto">
           </Nav>
            {/* Login and Sign Up buttons */}
            <div>
              <Button variant="outline-primary" size="m" className="me-3" onClick={RouteToLoginPage} >Login</Button>
              <Button variant="outline-success" size="m" onClick={RouteToSignUpPage}  >Sign Up</Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>      
      
          <img
            className="d-block w-100 "
            src={Natwest}
            alt="Natwest"
          />


      <footer className="py-1 my-2">
        <ul className="nav justify-content-center border-bottom pb-1 mb-1">
          <li className="nav-item nav-link px-2 text-muted">Services</li>
          <li className="nav-item nav-link px-2 text-muted">About Us</li>
          <li className="nav-item nav-link px-2 text-muted">Contact Us</li>
          <li className="nav-item nav-link px-2 text-muted">Blogs</li>
          <li className="nav-item nav-link px-2 text-muted">FAQs</li>

        </ul>
        <p className="text-center text-muted">© Natwest Group</p>
      </footer>



    </div>
  )
}

export default HomePage