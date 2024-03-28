// import { type FaqsType } from 'dh-marvel/components/faqs/faqsData'
// import * as React from 'react'
// import Accordion from '@mui/material/Accordion'
// import AccordionDetails from '@mui/material/AccordionDetails'
// import AccordionSummary from '@mui/material/AccordionSummary'
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
// import Typography from '@mui/material/Typography'

// export default function SimpleAccordion ({ id, question, answer }: FaqsType) {
//   return (
//     <div key={id}>
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
//             {question}
//           </Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <Typography>
//             {answer}
//           </Typography>
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

import { type FaqsType } from '../../components/faqs/faqsData'
import * as React from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Typography from '@mui/material/Typography'

export default function SimpleAccordion ({ id, question, answer }: FaqsType): JSX.Element {
  return (
    <div key={id}>
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
            {question}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{answer}</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}
