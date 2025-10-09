"use client";

import {useQuery} from "convex/react";
import {api} from "@/convex/_generated/api";
import {EmptyState} from "@/components/EmptyState";
import {LoaderSpinner} from "@/components/LoaderSpinner";
import {CardPodcast} from "@/components/CardPodcast";
import {CardProfile} from "@/components/CardProfile";

type PageProfileByIdProps = {
  params: {
    profileId: string;
  };
};

function PageProfileById({params}: PageProfileByIdProps) {
  const user = useQuery(api.users.getUserById, {
    clerkId: params.profileId,
  });
  const podcastsData = useQuery(api.podcasts.getPodcastByAuthorId, {
    authorId: params.profileId,
  });

  if (!user || !podcastsData) {
    return <LoaderSpinner />;
  }

  return (
    <section className="mt-9 flex flex-col">
      <h1 className="text-20 font-bold text-white-1 max-md:text-center">
        Podcaster Profile
      </h1>
      <div className="mt-6 flex flex-col gap-6 max-md:items-center md:flex-row">
        <CardProfile
          // @ts-expect-error: incompatible _id type in podcast object
          podcastData={podcastsData!}
          imageUrl={user?.imageUrl!}
          userFirstName={user?.name!}
        />
      </div>
      <section className="mt-9 flex flex-col gap-5">
        <h1 className="text-20 font-bold text-white-1">All Podcasts</h1>
        {podcastsData && podcastsData.podcasts.length > 0 ? (
          <div className="podcast_grid">
            {podcastsData?.podcasts?.slice(0, 4).map((podcast) => (
              <CardPodcast
                key={podcast._id}
                imgUrl={podcast.imageUrl!}
                title={podcast.podcastTitle!}
                description={podcast.podcastDescription}
                podcastId={podcast._id}
              />
            ))}
          </div>
        ) : (
          <EmptyState
            title="You have not created any podcasts yet"
            buttonLink="/podcast/create"
            buttonText="Create Podcast"
          />
        )}
      </section>
    </section>
  );
}

export default PageProfileById;
