import { render, screen } from "@testing-library/react";
import Index from "dh-marvel/pages/index.page";
import { rest } from 'msw';
import { setupServer } from 'msw/node';

const server = setupServer(
    rest.get('http://localhost/api/comics', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                id: 82967,
                digitalId: 0,
                title: 'Marvel Previews (2017)',
                issueNumber: 0,
                variantDescription: '',
                description: '',
                modified: '2019-11-07T08:46:15-0500',
                isbn: '',
                upc: '75960608839302811',
                diamondCode: '',
                ean: '',
                issn: '',
                format: '',
                pageCount: 112,
                textObjects: [],
                resourceURI: 'http://gateway.marvel.com/v1/public/comics/82967',
                urls: [
                    {
                        type: 'detail',
                        url: 'http://marvel.com/comics/issue/82967/marvel_previews_2017?utm_campaign=apiRef&utm_source=33ab83baee22b00dc150665f958d68e1',
                    },
                ],
                series: {
                    resourceURI: 'http://gateway.marvel.com/v1/public/series/23665',
                    name: 'Marvel Previews (2017 - Present)',
                },
                variants: [
                    {
                        resourceURI: 'http://gateway.marvel.com/v1/public/comics/82965',
                        name: 'Marvel Previews (2017)',
                    },
                    // Aquí puedes agregar más variantes si lo deseas
                ],
                collections: [],
                collectedIssues: [],
                dates: [
                    {
                        type: 'onsaleDate',
                        date: '2099-10-30T00:00:00-0500',
                    },
                    {
                        type: 'focDate',
                        date: '2019-10-07T00:00:00-0400',
                    },
                ],
                prices: [
                    {
                        type: 'printPrice',
                        price: 0,
                    },
                ],
                thumbnail: {
                    path: 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available',
                    extension: 'jpg',
                },
                images: [],
                creators: {
                    available: 1,
                    collectionURI: 'http://gateway.marvel.com/v1/public/comics/82967/creators',
                    items: [
                        {
                            resourceURI: 'http://gateway.marvel.com/v1/public/creators/10021',
                            name: 'Jim Nausedas',
                            role: 'editor',
                        },
                    ],
                    returned: 1,
                },
                characters: {
                    available: 0,
                    collectionURI: 'http://gateway.marvel.com/v1/public/comics/82967/characters',
                    items: [],
                    returned: 0,
                },
                stories: {
                    available: 2,
                    collectionURI: 'http://gateway.marvel.com/v1/public/comics/82967/stories',
                    items: [
                        {
                            resourceURI: 'http://gateway.marvel.com/v1/public/stories/183698',
                            name: 'cover from Marvel Previews (2017)',
                            type: 'cover',
                        },
                        {
                            resourceURI: 'http://gateway.marvel.com/v1/public/stories/183699',
                            name: 'story from Marvel Previews (2017)',
                            type: 'interiorStory',
                        },
                    ],
                    returned: 2,
                },
                events: {
                    available: 0,
                    collectionURI: 'http://gateway.marvel.com/v1/public/comics/82967/events',
                    items: [],
                    returned: 0,
                },
            })
        );
    })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Index', () => {
    describe('when rendering default', () => {
        it('should render the title', () => {
            render(<Index initialComics={[]} initialTotal={0} />);
            const title = screen.getByText('Aplicación Marvel');
            expect(title).toBeInTheDocument();
        });
    });
});