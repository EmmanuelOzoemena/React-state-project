import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state =  {
      person: {
        fullName: 'Emmanuel Ozo',
        bio: 'A junior frontend developer passionate about creating engaging and user-friendly web experinces. Enthusiastic about learning new technologies and contributing to innovative projects.',
        imgSrc: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgWFhYYGBgaHR4aHRoaGhgYHh4hGhoaIRocGh4eIS4lHCQrHxwcJzgmKy8xNTU1HCQ7QDs0Py40NTEBDAwMEA8QHRISHjErJCE0MTQxNzE0NDQ0NDQ0NDQ0NDQxNDQ0NDQ0NDQ0MTQ0NDQ0NDQxNDQxNDQ0NDQ0NDQ0Mf/AABEIARQAtwMBIgACEQEDEQH/xAAcAAAABwEBAAAAAAAAAAAAAAAAAQIDBAUGBwj/xABBEAABAwIEAwYEBAMGBQUAAAABAAIRAyEEEjFBBVFhBnGBkaHwEyKx0TJCweFScvEHFCQzYoIWI5KiwhU0Q2Oy/8QAGQEBAAMBAQAAAAAAAAAAAAAAAAECBAMF/8QAJxEAAwACAgIBBAEFAAAAAAAAAAECAxEhMQQSQRMiQlFhkaGxwfH/2gAMAwEAAhEDEQA/AJkW99UumEnL9CPfknWD9ff6KCxIpNsg9l7JVIJTwhA0GIOQ9+eiMM8fe3mgEFgA/DN/11QYQRFuoBTwb78P2SKWHDZjcyep/RAG1gGg15J0Ntv75oms2Cca07oBEJEJ4tSGM5IBMJQCMtSmhAJypbWo2hKlAIAQJQeY0RTKABKIowiQBFFKMlJzeSEBEoIi33/VBARcvvwSmMHvwSaVLLmIbBcZNxc6T5BSGhCw5SCNyDUjEUi5sTHiUIFZJ84QYyN/VGymQBfRPgFAMESj05p8A9EmHcx3/sgEt+iUX3iClMBvJHRG5/igCI2QyIxPL1R/DQCcqPKlQURaeaAazCYSyEzUw7iZzx3C/qnBR5uKAOyItCMUwOfmhlCAQSP2RAJcJGZAFugg4e/BBAJJRIOHJEgEBLB9/RNMB39PBOAex0KEjrUsBJaEouA39/ohAcSgja2UQ9+QQAcCltSYSkAY7/BAG/h7+qouIdqcNSkZ87xbLTGbzd+Eeay2O7fViZp0WNbtnJcSDHIiPVBo6QiaTHNczb25xIs4MbJiXU3wPHNp4q64f24pnI2sx7DZrqgEskb2uAfHxuhOjZyhCj4as17Q9rmvadHNgg90KQ1wKEBEIkbikuaSgCKQlxzQAQCMpCIgJw+SS5AIhBBJcCgCcUaGWdUaEDbWIwUI0jY+/VKYOW0fohYcDRf3qlEe/fgkgW99EphvCAUAiDUVz76I2g++c/1QgGbqua9s+1RqO+DQdFLRz2mM53aDs3a2vdrc/wBonFzSotpMMOrS0nkxoGaO+QPErmNNpdF7ddPfchKHmEEgNdAOwEnw197q0fTe0BzHF5A0OSdY/CWkkKieHAgwAO8fQGU9hakvFgSSBeb/AFjyOyEhnFuJJyNcZvLQfIRZXFaiQ1jmtDMwzZD8wtFo1gzqL30skYl7cPVfF3iALzEiXCRyOhHRQDxB73ZnEmBF725Hw3UNhI0fZjjxwzmuJPwahOdupaRbMOog7XtzC6qx0iR9/BcIa8H5Wh0ZswzESTFwY8LdF1LsNxYVaIY4nOyxmLg3bYaQI8kQpGnIREJTmSg5nNSVGXc/QIzKUW2RBiAbQyxvZOEcgkFk6oBJB2QhKyIw1AIAQS4QQEf39bJXv34pwNRtZCEhtRgcvfuyNgTjQhA3k9/um3MM3v70KkykuUaByf8AtOxM4hlMC7GSTvLzpPcPVY9h+W1+fT9ltv7VMPFak+B8zCJ/lI181hWhSSSyS9kGPl00GuqkcLwmZxBtaxtrtqPoncHgQ5ovK1/BuEAgOPIWXG8yng0Y8LrlmewnZqrVdYF3MmfUxdbjgfYNlNpdUGdxEdAFqeEUWtaA0AK5A2XL3dI6+ky+DBf8L0mPLy0GNBA6a89FR9m2/wB14i6jEsqiWHUiNB9R4BdB4kyCVk8fhh/esK/cVC3/AKmOMeiritqtMnNKqNm0DfBGWpmo6YjnsCZCfYZB1WzZg0Jc1ILN045olEFIEEJJSyiIQCCUnP5JRRIBJHJBAORoQNtp7SfRLydT6JKNovHcULD1NtksomJTkIE5UkoyiMoDIf2j8N+JhS8D5qTs/ho70M+C5HK7z2mrhmGquLc4LcmU754bfzlcLr4ct3kbG48wdFG1vRZS9bLrgclpJsJstZheNUaUBxJcdGsBe6OcBZTANLmMYz8RgK8w2Cq0jkpSxziS6oWte4CLQBrfyWS0nXJtxulOkafDdsKbCM9HEMGznUyGnxWswvGGVBLL2lZbCcLz0MtWpUqv1Ly1zWxH4crnR5XvsofZNpo1n0vyG7Q4yWzNp7oKrTU9F5l12TO0PaV+f4TH0qZ3e8Oe62uVo1gbqJgGOzh5xLa+R7XPaWBhbO4GrbE2PNWeO4C2o4ktpOvMOZmvETryS38LPzPLW5iMpIESOU6lSqS0/kVj3tfBpsqItujpHM1p1kA+iDm6rYeaMtOveiSaLYkTullSBtySXHwSyDv3oQgGSPfiiIJ3sni1EQgGnN9lGlFqCAYLh+qS1t9TGv7TyTLX7dEppPyx1n9kBOpn39EolN0yjLkA5lRhiJqU3RAV3HsIauHexv4i2W/zNu0eYhca41THyEWBYB3EbHzXdiFj+1XZKnVY97CWPguLRdriLmB+UmNrdFSpe00dYtKXLOe8Eqw5hmIIXU+A1W1IcYhcXw1bK4ibLonZLFPNm3GusbSVnzTzs0YL40dH4mabKbnE2a0uN+QWEwwzVG1czQHXF95sJUHjna9jyaLWl40cZyNjeCfLqstheGvquDWOAGaA0Oe46SIAGw+ih498vg7Tk11ydmxDmgMdnAJtEi5jSNyo7eMgl1N7YI0PPl76LIY3hNdrMzK1V9JjMxyMcHCBfK534vwnkoPDH16Nd3xWvyfDzgvIc6JAAJFpzDTZR6Ncol1+0dN4bVzMgflcW/r+qkNaZ120VJ2Le52GD3f/ACPe8dxdAPkFfbLXK+1Hm0902MNbr3oFqUwa96UQrFBlwSYT+VJLUJGoQhO5URCEDWVGltaghJnqb5O+mtrdykMeozffvojzX97/ANEJLFlT6JYcotDWU+0oQSWFPBR6SktCAJwTVVsg9yfcE1WcGgucQ1rZJJMAAXJJOgQHn3i+G+FiKjNmvcB4OMeisuz3GHU3iTfQDaHD9032hqCtWqPbo5xI7pgegCpGGFVpUtHRNy9nUOEcBoPw5c1jXODyW5tcoj5Z5TMeCvezvEPhlrYY0NIAsCRAIvN9DrK552Y7Umicr5IJ125G3VdRw9PDVwHggtcBcEW5jobLPSqaNmO5qdaROx3EG1QGCoTfQBoHk3XxWQ7XFz61LC07Pe0M00bmknuEA/7VqmihhmWDbXm3MCemvoqns8wYnHVcSILGN+Gw83EguItsAPMqZTquSmWvWdI1eDwrabGMYIaxoa0dGiAni2yUUDotJiI7BYpWVGBCVm70AjKiyp0dxRwhAwWoFqcKGVCRqEE4QgpBkS0gjS8Aza3Mczrbqn26JL3De836oyRzUEjjZvp08vr90JftAF73tYbb+drIMepDHWJImNu79UAMFXc50EaWJgi+19CrWmoNI305J3GY5lFhe85QNtydmtG5REMXjcWykwvqPaxjdXOMdw7zyWL472iOJZ8PDBwzgh+YgEgG4YJvI1I2MKr4zxmpiXuBtTH4aYjWLuJ3MEX0F4VXkcxssMlt3Dnefl5RtHJd/oOp70yiyqa62Qf7mWPyuaR3peK4GHiRYrS4XHU67Q2tqPw1IuJ0D41/m89yrU8GLQCIcCJBFweoXnXOTFWn/wBPQioyTtHLa3B6jTYTCncK/vbHgUw/bS3QG5suhnhsj8KLAcFf8QEQANU+s32QsMp7TK7h3ZLG4twdiK4YwEEtb8zo1HQaLpXCeGMw9JtKmIa3c3JJuSTuZKyPaGq+i+k+m4tc0OFt9DHWeRUrBduAWj4lMk2uwiCOZDtCOUrVih3KqTLlv1pyzXOlFCp6fajDOEl5Z/M1w8SQCB57K0w+JZUGZj2PHNrgR4wpctdoommLR5Uo9yCgkTlQiEbgkiw9lAHlQhEHe/fj5J1rLKQNlqJPOCCAwzjcW/b73hJsIi21tPRRqlYcvfseibw1eek3GskeXNQSWVN4gen0up7AQ3rB9Sq7DD6qcx4A2GXeYFufIIBHEOKsoMNR+2g3NtB63WCr8UfiiKznaTlbJDWAHTraJKr+NcYdiarnEnJGVjdgznG5OpPdyTfDW5WFo5n1AWrFGntnC62W+GpNIyiLybHWTNkp1ItPRJwVIWkX0HMDorE0zHMdfd1oOJSV6JY7O24/M3mCrvgvGn0gMpz0zf4btL6lp1afZCiNAksPkdp08DGv6qE5vw3zoxxv0PNRcTa1SLTbl7R0/hfE8NVEA5Hn8j4B8Do7wVi7AjZcsIOylYPiNRgIY97OYDjHl+qwX4C7l/1NceW/yRd9tgM9NvVziP8AblH/AOifBZKj+IsP5vmaeu499E9UeXEuJLnHVzjJ+6Zqt+UHdpkeB+y14MP051sz5snvXtoWTGokbjkeijHFvw1Rtam9zWyA4i1ibO6wdRoQp7oPzdLpirRBBabtIiO9dWto5p6Ok9nuPtxILXZW1G/lEkObaHNn6K+j342XEeEVn08sOIcxxaHDWGh2U+S6n2Y4ycQw5yM7D80WkEDK6NtYPUdVky4tcro7ze+GXnvkm226X87alPdPfv7IgIFz6QuB0G3s57+99U9TCS68RpzS8OpQCaxGnWhEpIOQuJPXWI5iLHxnzT+CnfWBIMWMTFiQL+ym8OSWg8+Yjut33U3DMudbHlHLT3uuZck0DAv7sqvtnjjTwjw0w6pDB/uBLv8AsBur2mwcljP7S3kfAZt87j3jIB9SrSuSGZLDvkeQVxgB91QYNyvMJU+YeXn+6243wZbXJf0D0U1hFvynxH7KDhXSArBjI9yupQYxmFLoIs4aOGvUOb+Zp3A+oUfKKjIOuhGsHv8AUdCpzmOAsffd9lXVnH4gcLTrexgyCDyjM07/ADCVYDOCeWuNN/4gJaf4m9O5SHMggo+IYbO3Mw/O35mHry7iLJ5jg9jXjRwnuVQMOgpLG6hPFto5dE0x3zuCsA6Qt3IOb+yMCDolx7/qgK6q2C6N790kAn6q04HxB1Gox7edxzaYBB7wFX4tpj794R0/Od1VpNaCemdpw1dr2Newyx4kHofcJZEiNNgbd/6LN9ieItfTFE/jpyQObS658C71C1DWaWuvPufWmjXL2tjZsPTTn7KVQ1TFY/M1t7yZ6Ni3S5Hl3lS6Ig3MdNvcqESLIA8PFBOtCCkg5EzU+CnYfnfu7pVZTwoa7NJkgCCSWjLNwNtVPw7o3jp7PRcy5Pwb3E/M0AQDZ09+w3WB/tKxIOIYwfkZ83TO6R6N9Qtvh6+Uw4iTJETECP0K5x26Z/inHZ7GOHg3KR5s9VeSrKHDvgq3w7lSMN1aYWqGkB4+U7rRjo42jTYavb5myNy3p0VrhnkiWODxuDeOh3CqMHTcIynM03aZ33HjfyVgyi13zXa7+JtnDy1Wk5E5tUGxBa7kd+47/VQ8fTESBfUDmRy+h/ZSWtcBDw17f4gId4jQ94hMva6LHM3xzDw39COasQBhtAgCLJrACM7dg8wP5gHH1JS2O0i+iKjbM7m4nyAH6IBx9P7KFRH/ADD0VmOexVXSP+IeObQVUklZQiclN0SSrAgcQBDe8jTvRYfnqeiLi9WGATcm3oneF4ao/KGMccxgOIIb4u7lV0pW2FLp6Rc9mMeKOIY45QCchLjAAeRmd4W8l1rJ7usRheDU8OwF8Pe7WWg5rX1mG+9Ve9meJTTFN7pc05WkgjM38tyfmI06wF5t+RGStLv/ACbVgqJ33/ou8qUGW5J0IEhSUEtHigjBQQHIC8SPfr5+SSH37hHv08k3Uf5JplTvsN+vv0VC4niNRzSx4Js8T/Lla1wHLX0VN23w2akyoNWOiejhp5tHmrjEsLvlOkH1AA77ym8Xhfi4dzN3Mt/NYj1ai7IZzpgkjqrLB6aAjl91V0yQSNx7KtcMwGHAkHp+q1Y2cqLPBtfTM0XW1LH3ae47LQYTFseBLTTcdJu09xHVUmCe4C4B8Y96q3wEOBaBpfzEx5ytSOLLprf6oOozrbqm8MLhrRfaAT5K+w3AKz7lmQc3nL6a+irWSZ7eiVDrpGYxNDJLhubwIgnfxSKK3H/DDcpD6kyNA23mSsfxPAvw78j7j8rtnD79FSPIx3XqnyWrDSW2hLNxy/VVgH+LI50wfUqzaPnB5hVzmf40D/6v/IrqUJQZzRFKadZRO81YgLCPpsqtdUDSIJGYAxGpgrc8Eol7jXqjK0CGNP5WDcjmdT4DZc+pYVlSvTl/zscH5IsWkOEk88wbA710gV5axgtPkAPqvG8yl9VnqeND+mhllJ1dxdGVn5R02n3+yKlZz3NZRDSGmS92jo2bFz3q0q0s7cjZAP4iLEjlO0qFXa5pDKZANgXxLW9Gjc+g9FlNPfBo8BizUaSW5XAwRM8lMaFkKVZmFewZiS4y9xMkg6udyv6dy2Ad47rZjv2X8ow5o9Xx0wigjKC6HI4e+oRaIgxPgP1KUw2HNMViDa/Puv8At69UumYEeU9/3CoXHZN+63jyUhhttv79VGe63p77x9E/Rs0SgMJ2qwXw65e0fLUl475+dvnf/cmuEu+YNH5tPI7aLXdp8D8Sg8/mYM48Pxf9oK598UhuUSOoO3JdorXJSp2bHD0Q5wY0y47AyWnreB5hbjgnAGNOeo/M6LtbYeep16LlXBMXlsLOb6j9vsuh8C4tmFzdZvI8rKnpcL+DX4/j46W3yzf4JrGWYxrO4CT3nU+KsGvJWfweJBVzh6ixKnT5Z2qEukPvaq3i3DWVmFjx3Eag7EK4ZdB9JX00/ae0c9rpnGeOYTE4am7M2WMfHxAWuIYR+LLzBI8lWdmq5fixTrPyufLGvMvubhoJN2u1Bm09V2PHYVrj8wlrvldMaH9FzGrwYYTEPY9rXZRNJ7hLgwzEHmNJ26LVGe8nb0yjxRK4XBp6vZZ02qtv/oN/+5MP7NP2e076EfdbPCltShTqA/M5jXcrkCR5oBsDbw7lyrys8vW/7Ezhw0t6MJw3gFWi97yGvc86yRAH4WgQdArX4tUR8jZG5JO/ctPk197Jp+GF1luqpun2zVLmUpS4Rnvj1zrULR/oACM4T/W//qdv4q1qYYSmK7I8v6e+q5v2+TqmvgosRg2hxfcuOpJJJta58FvezFYvw7CbkS2eYaSB6LFV2ErU9jav/Lcw6tdPg79wVo8Wvu1+zP5c7jf6NCR1QRm3NBekeacE+OHOdfcWgiO/nc+icab++qj4ig8tc0G7jd1wQDEi0aCdOnegcE8A/O83n8UG59BYW7+a5lyaXCB36/fwUhlUabxfXfRM0KZmCNNCLT1PIqQylGggnV39feiADqgLgzWbHoCDJXMsfhjTe5jvyuLfL7iD3FdQoYUNcHCbaDqYBPiLLG9tqTW1mnd7AXdSC4A+QAVpIZmGOLSHA3FwVqOEY7RzbHcco1B96LLFqewmJLHSLg2I5j7quSPZHTFfqzsHCscXALRYTF6LmfBMeBBBJBvPNbnA4gOAv5LzaTlnpJq1s1+GxEqex8rOYN8RdW1J51XSaM9wP16QjoqDjHAW4kMD3OhkhpbAdBiQSQZFgrw1pTHxw2fNHWntMhJ60yj/APS30abWU3lwYCA18XuTcgDmouB7S05yPlj9CHSPLmO5WuPxoiZ1tCp8Tw9r2EVGBw1/ccj1C5O9vZomft0y+p1mvuHdQg+o4dVy3H4yrgqgaHl9J34Zu5t/wu5jr5rRYTtWHHK8FjtDM2nnyV9PWyulvRpq+JI2UR+Kzd39Z+iju4k07zJn7KBiOLsbMqnLLrSLN0Hu/dW/ZP8AzKkaZR9f6rKFuIe0Oo0ahFpIY70stx2W4a6kxzniHvgkbgDQGN7k+S0YMbVJmbPkXq0mXyCDtLILeYDh7hrdBh396p2q2JGwg/sUhjtuUH0P6t9VzLjjAU61IpmU6NDF4277qwHG+/VZft3hRkp1dwcngQXDyIPmtSwyJ1tIO15uqXtuz/CE8nsPqR/5IuyGc6cLJshO7FB7LK+iB/huONN1/wAJ16dQt9wjiEAQZBg68/fouakK14LxBzXBux/D0P2WbNiVLZpwZfV6Z2rAYkOErTYKqHCCuYcH4iQAdRutzwjFAwQbLDP2s2XPtOy9r4UESCqqrgnbGFa/3gRBUPE4gARKtkU9nHG6XBWf3FrJc45iOarOI47Zlz6R1TfF+IgAy8NaPxH9As+yu6qIYCyn/ETDnfYdVOHBWStJHTLmnHO2xdfF0W4mgzK15+I3O51xGa4HcAell07iXZ3DV/8AMptJ/iHyu8CFzDE4Fjg0ts5lgR0Bgeq7BhnBzGu/iDT5tC9OsE4pSPNeerrZm6fYLCiINWBoM9vorfA9n8PSILKTc38R+Y+ZVmEZC5qZXSDun2w2lKCS0I4VyoaCNBAcSqv2G+/dt57pAbEuvbaO4DZO1ALaHYfQ/QeZRsExOvjqoLgos5mT71Uljb+/f9UljNe63pCeo0wJM/pbkgFC/dv06fXyVf2nwpfg606hue3+hzXnxgK0pUDMyd7aj5unRSPg5mFrh+IFrt5BEeNoREM4jTZN9vsnXNkgeJSqtI05Y7VrnNP+xxB9QnMGy2Y7+wu0rZzp6I76MqOCQZBII3FirrDUsxhN4zAAXVqxNraIV8jvCOPup2dJHMX8xv3rpfZLi9Op+F0HlNj3fZcpZheal4Vj2EOY4tPMGPNZ68RVyuGao8pzw+Ud24hxOnRYXvcGjmTEnkOa5zxbtm97/h0mu+aYJt+6yOIqValan8R73y4NbmMgTaw0C3eD4GxkPF3tEfeFbF4c/kUyeU/xK/A8Ie858Q4ujRmw8FeERYWT77iVHJ1XoREytSjFVuntsS0wD3g/VdR4R/kUv5GejQuWgLqfCP8AIpfyN+gXDyOkXxEtoRoIAc1lOwAlBEUaANBEggON12CR739+QSQP1+qCCguSqeqlUmD33j7lBBAPfDGYd32+3qVI59yJBCDi3aE/4qqNB8V2nV5UpjBkb3H6o0FpxfJysewP4/fRTcewQggtC6OL7IjGBP0aYkeCJBESyx7Q4NlOlSe0Q74jb+IWpwzzAQQUrsh9El+6jPCCCsVY0V1Hgf8A7el/KEEFm8jpHXGT0EEFlOwQRlBBAGgggpB//9k=',
        profession: 'Front-End Developer'
      },
      shows: true,
      timeInterval: 0
    };
  }

  componentDidMount() {
    this.intervalId = setInterval (() => {
      this.setState((prevState) => ({
        timeInterval: prevState.timeInterval + 1
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  toggleShow = () => {
    this.setState((prevState)  => ({
      shows: !prevState.shows
    }));
  }

  render() {
    const { person, shows, timeInterval } = this.state;

    const cardStyle = {
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '16px',
      margin: '16px auto',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      maxWidth:  '300px'
    }

    const btnStyle = {
      border: 'none',
      borderRadius: '8px',
      padding: '8px 15px',
      backgroundColor: 'red',
      color: '#fff',
      cursor: 'pointer'
    }

    return (
      <div style={cardStyle}>
        <h2>Name: {person.fullName}</h2>
        <p style={{ fontWeight: 'bold', fontSize: '20px'}}>Bio: <span style={{ fontWeight: 'lighter', fontSize: '18px'}}>{person.bio}</span></p>
        <img src={person.imgSrc} style={{ borderRadius: '8px' }} alt="Person"/>
        <h3>Profession: {person.profession}</h3>
        <p>{shows ? 'Currently showimg' : 'Currently not showing'}</p>
        <button onClick={this.toggleShow} style= {btnStyle}>Profile</button>
        <p>Time Interval since mount: {timeInterval} seconds</p>
      </div>
    )
  }
}

export default App;
