import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Link from 'next/link'
import Typography from '@mui/material/Typography'

interface CharactersAccordion{
  title: string
  characters: Array<{ id: string, name: string }>
}

export default function CharactersAccordion ({
  title,
  characters
}: CharactersAccordion): JSX.Element {
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
