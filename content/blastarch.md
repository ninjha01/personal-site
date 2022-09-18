##### **A private and performant sequence alignment service**

DNA sequence alignment is a powerful tool for many tasks in genomic data analysis. Sequence alignment tools such as BLAST helps you find regions of biological sequence that resemble each other. They help answer questions like "What viruses are similar to SARS-CoV2?" or "Is this mouse gene that causes cancer also present in humans?".

Most alignment software tools are slow, unintuitive and often require users to share their confidential data with third-party servers. This last aspect is a particular concern for users in industry as their sequences comprise a significant business asset. As a result, many organizations need to stand up an internal sequence alignment service.

###### **What would the architecture for a fast and private sequence alignment tool look like?**

Here I sketch out the architecture for two workflows. The first is the database generation workflow. This db serves as an index into a collection of dna sequences, and will need to be regenerated as new sequences of interest are created. The workflow is kicked off manually on a set cadence via cronjob. This starts up a container running the [ncbi blast image](https://hub.docker.com/r/ncbi/blast). This image pulls down the fasta files containing the relevant sequences from a cloud storage bucket. These are use to generate the blastdb mentioned above, which is then pushed to another cloud storage bucket.

The second is the architecture for running sequence alignment queries. Here we start with a request coming from our frontend ([see a mockup here](/mockups/blast)) stored on a CDN. This request gets routed through a load balancer to our backend web server in a client-specific container. This backend shells out to the `blast` binaries in the [ncbi blast image](https://hub.docker.com/r/ncbi/blast). This runs against the blast db generated and stored in a cloud storage provider in the previous db generation workflow.
