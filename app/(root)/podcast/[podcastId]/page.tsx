type PagePodcastByIdProps = {
  params: Promise<{
    podcastId: string;
  }>;
};

async function PagePodcastById(props: PagePodcastByIdProps) {
  const params = await props.params;

  return <p className="text-white-1">PagePodcast {params.podcastId}</p>;
}

export default PagePodcastById;
