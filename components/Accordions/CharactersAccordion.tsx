// import * as React from 'react'
// import Accordion from '@mui/material/Accordion'
// import AccordionDetails from '@mui/material/AccordionDetails'
// import AccordionSummary from '@mui/material/AccordionSummary'
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
// import Link from 'next/link'
// import Typography from '@mui/material/Typography'

// export default function CharactersAccordion ({ title, characters }: { title: string, characters: string[] }) {
//   return (
//     <div>
//       <Accordion>
//         <AccordionSummary
//           expandIcon={<ExpandMoreIcon />}
//           aria-controls="panel1a-content"
//           id="panel1a-header"
//           sx={{
//             margin: '5px'
//           }}>
//           <Typography
//             sx={{
//               fontWeight: '600',
//               color: '#305f8f  '
//             }}>
//             {title}
//           </Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           {characters?.length === 0
//             ? <Typography>
//                             Información no disponible
//             </Typography>
//             : <>
//               {
//                 characters?.map((character: any, index: number) => {
//                   return (
//                     <Typography key={index}>
//                       <Link href={`/personajes/${character.id}`}>
//                         {character.name}
//                       </Link>
//                     </Typography>
//                   )
//                 })
//               }
//             </>

//           }

//         </AccordionDetails>
//       </Accordion>
//     </div>
//   )
// }

// refactor

/*
* Usar la extensión better comments
! se modifica la importación dh- marvel, por  este error  Unable to resolve path to module dado en eslint
*/

import * as React from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Link from 'next/link'
import Typography from '@mui/material/Typography'

export default function CharactersAccordion ({
  title,
  characters
}: {
  title: string
  characters: Array<{ id: string, name: string }>
}): JSX.Element {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{
            margin: '5px'
          }}
        >
          <Typography
            sx={{
              fontWeight: '600',
              color: '#305f8f'
            }}
          >
            {title}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {characters?.length === 0
            ? (
              <Typography>Información no disponible</Typography>
            )
            : (
              <>
                {characters?.map((character: { id: string, name: string }, index: number) => {
                  return (
                    <Typography key={index}>
                      <Link href={`/personajes/${character.id}`}>{character.name}</Link>
                    </Typography>
                  )
                })}
              </>
            )}
        </AccordionDetails>
      </Accordion>
    </div>
  )
}
